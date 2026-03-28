/**
 * import-substack.mjs
 * Fetches the Substack RSS feed and saves each post as a Markdown file
 * in src/content/blog/[slug].mdx, ready for Astro Content Collections
 * and Decap CMS editing.
 *
 * Usage:
 *   npm run import:blog              # create only new files (skip existing)
 *   npm run import:blog -- --force   # re-import all posts (overwrites existing)
 */

import Parser from "rss-parser";
import TurndownService from "turndown";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = join(__dirname, "../src/content/blog"); // EN posts at root, FR translations in fr/
const FEED_URL = "https://jbarbeau.substack.com/feed";
const FORCE = process.argv.includes("--force");

// ---------------------------------------------------------------------------
// Turndown setup
// ---------------------------------------------------------------------------

const td = new TurndownService({
	headingStyle: "atx",
	bulletListMarker: "-",
	codeBlockStyle: "fenced",
});

// Keep iframes as raw HTML (Spotify embeds, YouTube, Substack video, etc.)
td.addRule("keep-iframes", {
	filter: "iframe",
	replacement: (_content, node) => `\n\n${node.outerHTML}\n\n`,
});

// Strip the Substack image action bar (restack + expand buttons)
// Using DOM filter (not regex) so nested tags don't cause broken HTML
td.addRule("strip-image-link-expand", {
	filter: (node) => node.nodeType === 1 && node.classList.contains("image-link-expand"),
	replacement: () => "",
});

// Convert the sentinel div (from preprocessGalleries) into MDX ImageGrid syntax
td.addRule("mdx-image-grid", {
	filter: (node) =>
		node.nodeType === 1 && (node.getAttribute("class") || "") === "mdx-image-grid",
	replacement: (_content, node) => {
		const cols = node.getAttribute("data-cols") || "3";
		const imgs = Array.from(node.querySelectorAll("img"));
		if (imgs.length === 0) return "";
		const imgLines = imgs.map((img) => `  <img src="${img.getAttribute("src")}" alt="" loading="lazy" />`).join("\n");
		return `\n\n<ImageGrid columns={${cols}}>\n${imgLines}\n</ImageGrid>\n\n`;
	},
});

// ---------------------------------------------------------------------------
// RSS parser setup
// ---------------------------------------------------------------------------

const parser = new Parser({
	customFields: {
		item: [
			["content:encoded", "contentEncoded"],
			["description", "description"],
			["enclosure", "image"],
		],
	},
	timeout: 10000,
	requestOptions: { rejectUnauthorized: false },
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function slugFromLink(link) {
	const parts = link.split("/p/");
	const last = parts[parts.length - 1];
	return last?.split("?")[0]?.split("#")[0] ?? null;
}

function extractFirstImage(html) {
	const match = html?.match(/<img[^>]+src="([^">]+)"/);
	return match?.[1] ?? null;
}

function buildExcerpt(html, maxChars = 200) {
	if (!html) return "";
	const text = html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
	return text.length > maxChars ? text.slice(0, maxChars).trimEnd() + "…" : text;
}

/**
 * Replace Substack image gallery divs with MDX ImageGrid markup BEFORE Turndown runs.
 * Turndown ignores empty divs, so we preprocess the raw HTML instead.
 */
function preprocessGalleries(html) {
	return html.replace(
		/<div[^>]+class="[^"]*image-gallery-embed[^"]*"[^>]+data-attrs="([^"]+)"[^>]*><\/div>/g,
		(_match, rawAttrs) => {
			try {
				const attrs = JSON.parse(rawAttrs.replace(/&quot;/g, '"'));
				const images = attrs?.gallery?.images ?? [];
				if (images.length === 0) return "";
				const cols = images.length === 1 ? 1 : images.length === 2 ? 2 : 3;
				const imgTags = images
					.map((img) => `<img src="${img.src}" alt="" loading="lazy" />`)
					.join("");
				// Use a sentinel div that Turndown will see as having content
				return `<div class="mdx-image-grid" data-cols="${cols}">${imgTags}</div>`;
			} catch {
				return "";
			}
		}
	);
}

/** Minimal safe YAML string serializer — quotes values that could confuse parsers. */
function yamlValue(value) {
	if (typeof value === "boolean") return String(value);
	if (value instanceof Date) return value.toISOString();
	const str = String(value);
	// Quote if the value contains YAML special characters or starts/ends with whitespace
	const needsQuote = /[:#&*!\[\]{},|>'"@`%]/.test(str) || /^\s|\s$/.test(str) || str === "";
	if (needsQuote) {
		return `"${str.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
	}
	return str;
}

function buildFrontmatter(fields) {
	const lines = ["---"];
	for (const [key, value] of Object.entries(fields)) {
		if (value === undefined || value === null) continue;
		lines.push(`${key}: ${yamlValue(value)}`);
	}
	lines.push("---");
	return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
	mkdirSync(CONTENT_DIR, { recursive: true });

	console.log(`Fetching RSS feed: ${FEED_URL}`);
	const response = await fetch(FEED_URL);
	if (!response.ok) throw new Error(`Feed fetch failed: ${response.status}`);
	const feedText = await response.text();
	const feed = await parser.parseString(feedText);

	const items = feed.items ?? [];
	console.log(`Found ${items.length} posts in feed\n`);

	let created = 0;
	let skipped = 0;

	for (const item of items) {
		const slug = slugFromLink(item.link);
		if (!slug) {
			console.warn(`  warn  — unparseable link: ${item.link}`);
			continue;
		}

		const filePath = join(CONTENT_DIR, `${slug}.mdx`);

		if (existsSync(filePath) && !FORCE) {
			console.log(`  skip  ${slug}`);
			skipped++;
			continue;
		}

		const html = item.contentEncoded || item.content || "";
		const hasGalleries = html.includes("image-gallery-embed");
		const processedHtml = hasGalleries ? preprocessGalleries(html) : html;
		const markdown = td.turndown(processedHtml);

		// Prepend MDX imports for any components used in the generated content
		const mdxImports = [
			...(hasGalleries ? ["import ImageGrid from '../../components/blog/ImageGrid.astro';"] : []),
		];
		const mdxHeader = mdxImports.length > 0 ? mdxImports.join("\n") + "\n" : "";

		// Image: prefer RSS enclosure, fall back to first <img> in body
		const image = item.enclosure?.url ?? extractFirstImage(html) ?? null;

		// Excerpt: use RSS description if present, otherwise derive from body
		let excerpt = item.description ?? "";
		excerpt = excerpt.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim();
		if (!excerpt) excerpt = buildExcerpt(html);
		excerpt = excerpt.replace(/<[^>]*>/g, "").trim().slice(0, 200);

		const pubDate = item.isoDate ?? new Date(item.pubDate).toISOString();

		const frontmatter = buildFrontmatter({
			title: item.title,
			pubDate,
			substackUrl: item.link,
			...(image ? { image } : {}),
			...(excerpt ? { excerpt } : {}),
			draft: false,
		});

		writeFileSync(filePath, `${frontmatter}\n${mdxHeader}\n${markdown}\n`);
		console.log(` create  ${slug}`);
		created++;
	}

	console.log(`\nDone. Created: ${created}, Skipped: ${skipped}`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
