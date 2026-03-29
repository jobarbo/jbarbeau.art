/**
 * import-substack.mjs
 * Fetches the Substack RSS feed and saves each post as a MDX file
 * in src/content/blog/[slug].mdx, ready for Astro Content Collections.
 *
 * Automatically converts content to reusable blog components:
 *   ImageGrid    — Substack image galleries
 *   Figure       — standalone linked images
 *   YouTubeEmbed — YouTube iframes
 *   SubstackLink — embedded post / publication cards
 *   BlogTextContent — wraps every text block between media elements
 *
 * Usage:
 *   npm run import:blog              # create only new files (skip existing)
 *   npm run import:blog -- --force   # re-import all posts (overwrites existing)
 */

import Parser from "rss-parser";
import TurndownService from "turndown";
import { writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = join(__dirname, "../src/content/blog");
const CONTENT_DIR_FR = join(CONTENT_DIR, "fr");
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

// Strip the Substack image action bar (restack + expand buttons)
td.addRule("strip-image-link-expand", {
	filter: (node) => node.nodeType === 1 && node.classList.contains("image-link-expand"),
	replacement: () => "",
});

// Render ImageGrid sentinel divs (injected by preprocessGalleries)
td.addRule("mdx-image-grid", {
	filter: (node) =>
		node.nodeType === 1 && (node.getAttribute("class") || "") === "mdx-image-grid",
	replacement: (_content, node) => {
		const cols = node.getAttribute("data-cols") || "3";
		const imgs = Array.from(node.querySelectorAll("img"));
		if (imgs.length === 0) return "";
		const imgLines = imgs
			.map((img) => `  <img src="${img.getAttribute("src")}" alt="" loading="lazy" />`)
			.join("\n");
		return `\n\n<ImageGrid columns={${cols}}>\n${imgLines}\n</ImageGrid>\n\n`;
	},
});

// Keep bare iframes (anything not already handled above)
td.addRule("keep-iframes", {
	filter: "iframe",
	replacement: (_content, node) => `\n\n${node.outerHTML}\n\n`,
});

// ---------------------------------------------------------------------------
// RSS parser
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
// HTML pre-processing (runs before Turndown)
// ---------------------------------------------------------------------------

/** Substack gallery divs → sentinel divs with real <img> children. */
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
				return `<div class="mdx-image-grid" data-cols="${cols}">${imgTags}</div>`;
			} catch {
				return "";
			}
		}
	);
}

/** Strip HTML tags and collapse whitespace to plain text. */
function htmlToText(html) {
	return html
		.replace(/<[^>]+>/g, " ")
		.replace(/&quot;/g, '"')
		.replace(/&amp;/g, "&")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&#\d+;/g, "")
		.replace(/\s+/g, " ")
		.trim();
}

function preprocessHTML(html) {
	return preprocessGalleries(html);
}

// ---------------------------------------------------------------------------
// Markdown post-processing (runs after Turndown)
// ---------------------------------------------------------------------------

/** Replace YouTube iframes with <YouTubeEmbed> components. */
function convertYoutubeIframes(md) {
	return md.replace(
		/<iframe[^>]+src="https:\/\/www\.youtube(?:-nocookie)?\.com\/embed\/([^?"'\s]+)[^"]*"[^>]*(?:\/>|><\/iframe>)/g,
		(_, videoId) => `<YouTubeEmbed id="${videoId}" />`
	);
}

/**
 * Convert all linked image patterns to <Figure> or <SubstackLink>.
 *
 * Handles every form Turndown can produce for <a href="..."><img .../></a>:
 *
 *   Compact (no extra text):  [![alt](img)](href)
 *   Multi-line (image only):  [\n\n![](img)\n\n\n\n](href)
 *   Embed (image + text):     [![](img)Title\n\nDesc\n\n](href)
 *                          or [\n\n![](img)\n\nTitle\n\n](href)
 *
 * Rule:
 *   - No text paragraphs after the image → <Figure>
 *   - Text paragraphs present             → <SubstackLink>
 */
function convertLinkedContent(md) {
	// Unified regex: any [...](url) where the link body starts with an image
	// \s* allows optional whitespace/newlines between [ and ![]()
	return md.replace(
		/\[\s*!\[([^\]]*)\]\(([^\)]+)\)([\s\S]*?)\]\(([^\)\n]+)\)/g,
		(fullMatch, imgAlt, imgSrc, extraContent, href) => {
			const text = extraContent.trim();
			const paragraphs = text
				.split(/\n{2,}/)
				.map((p) => p.trim())
				.filter(Boolean);

			// No extra text → simple Figure
			if (paragraphs.length === 0) {
				return `<Figure src="${href}" alt="${imgAlt}" />`;
			}

			// Has paragraphs → SubstackLink
			const hasListen = paragraphs.some((p) => /listen\s+now/i.test(p));
			const metaLine =
				paragraphs.find((p) => /\d+\s+(?:ago|like|comment)/i.test(p)) ?? "";
			const contentLines = paragraphs.filter(
				(p) => p !== metaLine && !/listen\s+now/i.test(p)
			);
			const title = contentLines[0] ?? "";
			const description = contentLines[1] ?? "";
			const label = hasListen ? "Listen now" : "Follow on Substack";

			const esc = (s) => s.replace(/"/g, "&quot;");
			return [
				`<SubstackLink`,
				`  href="${href}"`,
				imgSrc ? `  image="${imgSrc}"` : null,
				title ? `  title="${esc(title)}"` : null,
				description ? `  description="${esc(description)}"` : null,
				metaLine ? `  meta="${esc(metaLine)}"` : null,
				`  label="${label}"`,
				`/>`,
			]
				.filter(Boolean)
				.join("\n");
		}
	);
}

/**
 * Wrap every text segment (headings + paragraphs between media components)
 * in a <BlogTextContent> block.
 *
 * Block tags (with children): ImageGrid
 * Self-closing tags: Figure, YouTubeEmbed, SubstackLink
 */
function wrapTextInBlogTextContent(md) {
	// Precise patterns — block tags match their full open/close pair,
	// self-closing tags match only the self-closing form.
	const blockTagPattern = `<ImageGrid[\\s\\S]*?<\\/ImageGrid>`;
	const selfClosingPattern = `<(?:Figure|YouTubeEmbed|SubstackLink)[^>]*\\/>`;
	const splitRe = new RegExp(`(${blockTagPattern}|${selfClosingPattern})`, "g");

	const COMPONENT_START = /^<(ImageGrid|Figure|YouTubeEmbed|SubstackLink)[\s>]/;

	return md
		.split(splitRe)
		.map((part) => {
			if (COMPONENT_START.test(part.trim())) return part;
			const trimmed = part.trim();
			if (!trimmed) return "";
			return `<BlogTextContent>\n${trimmed}\n</BlogTextContent>`;
		})
		.filter(Boolean)
		.join("\n\n");
}

function postprocessMarkdown(md) {
	let result = md;
	result = convertYoutubeIframes(result);
	result = convertLinkedContent(result);
	result = wrapTextInBlogTextContent(result);
	return result;
}

// ---------------------------------------------------------------------------
// MDX import builder
// ---------------------------------------------------------------------------

function buildMdxImports(md, prefix = "../..") {
	const names = [
		"ImageGrid",
		"Figure",
		"YouTubeEmbed",
		"SubstackLink",
		"BlogTextContent",
	];

	const used = names
		.filter((tag) => md.includes(`<${tag}`))
		.map((tag) => `import ${tag} from '${prefix}/components/blog/${tag}.astro';`);

	return used.length > 0 ? used.join("\n") + "\n" : "";
}

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

/** Minimal safe YAML string serializer — quotes values that could confuse parsers. */
function yamlValue(value) {
	if (typeof value === "boolean") return String(value);
	if (value instanceof Date) return value.toISOString();
	const str = String(value);
	const needsQuote =
		/[:#&*!\[\]{},|>'"@`%]/.test(str) || /^\s|\s$/.test(str) || str === "";
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
	mkdirSync(CONTENT_DIR_FR, { recursive: true });

	console.log(`Fetching RSS feed: ${FEED_URL}`);
	const response = await fetch(FEED_URL);
	if (!response.ok) throw new Error(`Feed fetch failed: ${response.status}`);
	const feedText = await response.text();
	const feed = await parser.parseString(feedText);

	const items = feed.items ?? [];
	console.log(`Found ${items.length} posts in feed\n`);

	let created = 0;
	let skipped = 0;
	let frCreated = 0;
	let frSkipped = 0;

	for (const item of items) {
		const slug = slugFromLink(item.link);
		if (!slug) {
			console.warn(`  warn  — unparseable link: ${item.link}`);
			continue;
		}

		const filePath = join(CONTENT_DIR, `${slug}.mdx`);
		const frFilePath = join(CONTENT_DIR_FR, `${slug}.mdx`);

		if (existsSync(filePath) && !FORCE) {
			console.log(`  skip  ${slug}`);
			skipped++;
			if (existsSync(frFilePath)) frSkipped++;
			continue;
		}

		const html = item.contentEncoded || item.content || "";
		const processedHtml = preprocessHTML(html);
		const rawMarkdown = td.turndown(processedHtml);
		const markdown = postprocessMarkdown(rawMarkdown);
		const mdxImports = buildMdxImports(markdown);
		const mdxImportsFr = buildMdxImports(markdown, "../../..");

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

		// EN file
		writeFileSync(filePath, `${frontmatter}\n${mdxImports}\n${markdown}\n`);
		console.log(` create  ${slug}`);
		created++;

		// FR file — same content with adjusted imports, skip if already translated
		if (!existsSync(frFilePath) || FORCE) {
			writeFileSync(frFilePath, `${frontmatter}\n${mdxImportsFr}\n${markdown}\n`);
			console.log(` create  fr/${slug}`);
			frCreated++;
		} else {
			console.log(`   skip  fr/${slug} (already translated)`);
			frSkipped++;
		}
	}

	console.log(`\nDone.`);
	console.log(`  EN — Created: ${created}, Skipped: ${skipped}`);
	console.log(`  FR — Created: ${frCreated}, Skipped: ${frSkipped}`);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
