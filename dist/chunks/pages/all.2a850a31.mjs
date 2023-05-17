import { c as createCollectionToGlobResultMap, a as createGetCollection, b as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, m as maybeRenderHead, s as spreadAttributes, u as unescapeHTML, f as renderComponent, g as renderHead, h as renderSlot, F as Fragment } from '../astro.e93d40db.mjs';
/* empty css                           *//* empty css                               *//* empty css                                *//* empty css                           *//* empty css                               *//* empty css                               *//* empty css                           *//* empty css                          *//* empty css                                *//* empty css                         *//* empty css                           */
// astro-head-inject

const contentDir = '/src/content/';

const entryGlob = /* #__PURE__ */ Object.assign({"/src/content/exhibition/1.md": () => import('../1.bf92d2ac.mjs'),"/src/content/exhibition/2.md": () => import('../2.1f88de03.mjs'),"/src/content/exhibition/3.md": () => import('../3.6c341d66.mjs'),"/src/content/exhibition/4.md": () => import('../4.ce480e14.mjs'),"/src/content/exhibition/5.md": () => import('../5.b591cbf8.mjs'),"/src/content/exhibition/6.md": () => import('../6.ec8d67b9.mjs'),"/src/content/exhibition/7.md": () => import('../7.3dc08d89.mjs'),"/src/content/exhibition/8.md": () => import('../8.8b27126f.mjs'),"/src/content/exhibition/9.md": () => import('../9.1286ec93.mjs'),"/src/content/exhibition/9a.md": () => import('../9a.42dbea3d.mjs'),"/src/content/work/markdown-mystery-tour.md": () => import('../markdown-mystery-tour.98a238c4.mjs')

});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: entryGlob,
	contentDir,
});

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/exhibition/1.md": () => import('../1.1cfc7965.mjs'),"/src/content/exhibition/2.md": () => import('../2.d6153af8.mjs'),"/src/content/exhibition/3.md": () => import('../3.3c3ad9eb.mjs'),"/src/content/exhibition/4.md": () => import('../4.051dc031.mjs'),"/src/content/exhibition/5.md": () => import('../5.d291f08f.mjs'),"/src/content/exhibition/6.md": () => import('../6.7bc419e5.mjs'),"/src/content/exhibition/7.md": () => import('../7.27ef3d88.mjs'),"/src/content/exhibition/8.md": () => import('../8.8a4dbaae.mjs'),"/src/content/exhibition/9.md": () => import('../9.758a4662.mjs'),"/src/content/exhibition/9a.md": () => import('../9a.e0d69973.mjs'),"/src/content/work/markdown-mystery-tour.md": () => import('../markdown-mystery-tour.8764d24f.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	collectionToEntryMap,
	collectionToRenderEntryMap,
});

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$k = createAstro();
const $$MainHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$MainHead;
  const { title = "Jonathan Barbeau: Personal Site", description = "The personal site of Jonathan Barbeau" } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<meta charset="UTF-8">\n<meta name="description" property="og:description"', '>\n<meta name="viewport" content="width=device-width">\n<meta name="generator"', ">\n<title>", `</title>

<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,400;0,700;1,400&family=Rubik:wght@500;600&display=swap" rel="stylesheet">

<script>
	// This code is inlined in the head to make dark mode instant & blocking.
	const getThemePreference = () => {
		if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
			return localStorage.getItem('theme');
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	};
	const isDark = getThemePreference() === 'dark';
	document.documentElement.classList[isDark ? 'add' : 'remove']('theme-dark');

	if (typeof localStorage !== 'undefined') {
		// Watch the document element and persist user preference when it changes.
		const observer = new MutationObserver(() => {
			const isDark = document.documentElement.classList.contains('theme-dark');
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
		});
		observer.observe(document.documentElement, {attributes: true, attributeFilter: ['class']});
	}
<\/script>`])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), title);
}, "/Users/jbarbeau/Sites/homepage/src/components/MainHead.astro");

const iconPaths = {
  artist: `<path d="M200.77,53.89A103.27,103.27,0,0,0,128,24h-1.07A104,104,0,0,0,24,128c0,43,26.58,79.06,69.36,94.17A32,32,0,0,0,136,192a16,16,0,0,1,16-16h46.21a31.81,31.81,0,0,0,31.2-24.88,104.43,104.43,0,0,0,2.59-24A103.28,103.28,0,0,0,200.77,53.89Zm13,93.71A15.89,15.89,0,0,1,198.21,160H152a32,32,0,0,0-32,32,16,16,0,0,1-21.31,15.07C62.49,194.3,40,164,40,128a88,88,0,0,1,87.09-88h.9a88.35,88.35,0,0,1,88,87.25A88.86,88.86,0,0,1,213.81,147.6ZM140,76a12,12,0,1,1-12-12A12,12,0,0,1,140,76ZM96,100A12,12,0,1,1,84,88,12,12,0,0,1,96,100Zm0,56a12,12,0,1,1-12-12A12,12,0,0,1,96,156Zm88-56a12,12,0,1,1-12-12A12,12,0,0,1,184,100Z"></path>`,
  designer: `<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V96H40V56ZM40,112H96v88H40Zm176,88H112V112H216v88Z"></path>`,
  "terminal-window": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m80 96 40 32-40 32m56 0h40"/><rect width="192" height="160" x="32" y="48" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16.97" rx="8.5"/>`,
  trophy: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M56 56v55.1c0 39.7 31.8 72.6 71.5 72.9a72 72 0 0 0 72.5-72V56a8 8 0 0 0-8-8H64a8 8 0 0 0-8 8Zm40 168h64m-32-40v40"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M198.2 128h9.8a32 32 0 0 0 32-32V80a8 8 0 0 0-8-8h-32M58 128H47.9a32 32 0 0 1-32-32V80a8 8 0 0 1 8-8h32"/>`,
  strategy: `<circle cx="68" cy="188" r="28" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m40 72 40 40m0-40-40 40m136 56 40 40m0-40-40 40M136 80V40h40"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m136 40 16 16c40 40 8 88-24 96"/>`,
  "paper-plane-tilt": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M210.3 35.9 23.9 88.4a8 8 0 0 0-1.2 15l85.6 40.5a7.8 7.8 0 0 1 3.8 3.8l40.5 85.6a8 8 0 0 0 15-1.2l52.5-186.4a7.9 7.9 0 0 0-9.8-9.8Zm-99.4 109.2 45.2-45.2"/>`,
  "arrow-right": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176m-72-72 72 72-72 72"/>`,
  "arrow-left": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 128H40m72-72-72 72 72 72"/>`,
  code: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m64 88-48 40 48 40m128-80 48 40-48 40M160 40 96 216"/>`,
  "microphone-stage": `<circle cx="168" cy="88" r="64" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m213.3 133.3-90.6-90.6M100 156l-12 12m16.8-70.1L28.1 202.5a7.9 7.9 0 0 0 .8 10.4l14.2 14.2a7.9 7.9 0 0 0 10.4.8l104.6-76.7"/>`,
  "pencil-line": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M96 216H48a8 8 0 0 1-8-8v-44.7a7.9 7.9 0 0 1 2.3-5.6l120-120a8 8 0 0 1 11.4 0l44.6 44.6a8 8 0 0 1 0 11.4Zm40-152 56 56"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 216H96l-55.5-55.5M164 92l-96 96"/>`,
  "rocket-launch": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M94.1 184.6c-11.4 33.9-56.6 33.9-56.6 33.9s0-45.2 33.9-56.6m124.5-56.5L128 173.3 82.7 128l67.9-67.9C176.3 34.4 202 34.7 213 36.3a7.8 7.8 0 0 1 6.7 6.7c1.6 11 1.9 36.7-23.8 62.4Z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M184.6 116.7v64.6a8 8 0 0 1-2.4 5.6l-32.3 32.4a8 8 0 0 1-13.5-4.1l-8.4-41.9m11.3-101.9H74.7a8 8 0 0 0-5.6 2.4l-32.4 32.3a8 8 0 0 0 4.1 13.5l41.9 8.4"/>`,
  list: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M40 128h176M40 64h176M40 192h176"/>`,
  heart: `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 216S28 160 28 92a52 52 0 0 1 100-20h0a52 52 0 0 1 100 20c0 68-100 124-100 124Z"/>`,
  "moon-stars": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M216 112V64m24 24h-48m-24-64v32m16-16h-32m65 113A92 92 0 0 1 103 39h0a92 92 0 1 0 114 114Z"/>`,
  sun: `<circle cx="128" cy="128" r="60" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 36V16M63 63 49 49m-13 79H16m47 65-14 14m79 13v20m65-47 14 14m13-79h20m-47-65 14-14"/>`,
  "twitter-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M128 88c0-22 18.5-40.3 40.5-40a40 40 0 0 1 36.2 24H240l-32.3 32.3A127.9 127.9 0 0 1 80 224c-32 0-40-12-40-12s32-12 48-36c0 0-64-32-48-120 0 0 40 40 88 48Z"/>`,
  "codepen-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m232 101-104 59-104-59 100.1-56.8a8.3 8.3 0 0 1 7.8 0Z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m232 165-100.1 56.8a8.3 8.3 0 0 1-7.8 0L24 165l104-59Zm0-64v64M24 101v64m104-5v62.8m0-179.6V106"/>`,
  "github-logo": `<g stroke-linecap="round" stroke-linejoin="round"><path fill="none" stroke-width="14.7" d="M55.7 167.2c13.9 1 21.3 13.1 22.2 14.6 4.2 7.2 10.4 9.6 18.3 7.1l1.1-3.4a60.3 60.3 0 0 1-25.8-11.9c-12-10.1-18-25.6-18-46.3"/><path fill="none" stroke-width="16" d="M61.4 205.1a24.5 24.5 0 0 1-3-6.1c-3.2-7.9-7.1-10.6-7.8-11.1l-1-.6c-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.7 46.7 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4 0 42.6-25.8 54.7-43.6 58.7 1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3"/><path fill="none" stroke-width="16" d="M160.9 185.7c1.4 4.1 2.2 8.8 2.2 13.7l-.1 23.4v2.3A98.6 98.6 0 1 0 61.4 205c-1.4-2.1-11.3-17.5-11.8-17.8-2.4-1.6-9.5-6.5-7.2-13.9 1.4-4.5 6-7.2 12.3-7.2h.8c4 .3 7.6 1.5 10.7 3.2-9.1-10.1-13.6-24.3-13.6-42.3 0-11.3 3.5-21.7 10.1-30.4A46.4 46.4 0 0 1 65 67.3a8.3 8.3 0 0 1 5-4.7c2.8-.9 13.3-2.7 33.2 9.9a105 105 0 0 1 50.5 0c19.9-12.6 30.4-10.8 33.2-9.9 2.3.7 4.1 2.4 5 4.7 5 12.7 4 23.2 2.6 29.4 6.7 8.7 10 18.9 10 30.4.1 42.6-25.8 54.7-43.6 58.6z"/><path fill="none" stroke-width="18.7" d="m170.1 203.3 17.3-12 17.2-18.7 9.5-26.6v-27.9l-9.5-27.5" /><path fill="none" stroke-width="22.7" d="m92.1 57.3 23.3-4.6 18.7-1.4 29.3 5.4m-110 32.6-8 16-4 21.4.6 20.3 3.4 13" /><path fill="none" stroke-width="13.3" d="M28.8 133a100 100 0 0 0 66.9 94.4v-8.7c-22.4 1.8-33-11.5-35.6-19.8-3.4-8.6-7.8-11.4-8.5-11.8"/></g>`,
  "twitch-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M165 200h-42a8 8 0 0 0-5 2l-46 38v-40H48a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8v108a8 8 0 0 1-3 6l-43 36a8 8 0 0 1-5 2Zm3-112v48m-48-48v48"/>`,
  "youtube-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m160 128-48-32v64l48-32z"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M24 128c0 30 3 47 5 56a16 16 0 0 0 10 11c34 13 89 13 89 13s56 0 89-13a16 16 0 0 0 10-11c2-9 5-26 5-56s-3-47-5-56a16 16 0 0 0-10-11c-33-13-89-13-89-13s-55 0-89 13a16 16 0 0 0-10 11c-2 9-5 26-5 56Z"/>`,
  "dribbble-logo": `<circle cx="128" cy="128" r="96" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M71 205a160 160 0 0 1 137-77l16 1m-36-76a160 160 0 0 1-124 59 165 165 0 0 1-30-3"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M86 42a161 161 0 0 1 74 177"/>`,
  "discord-logo": `<circle stroke="none" cx="96" cy="144" r="12"/><circle stroke="none" cx="160" cy="144" r="12"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M74 80a175 175 0 0 1 54-8 175 175 0 0 1 54 8m0 96a175 175 0 0 1-54 8 175 175 0 0 1-54-8"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="m155 182 12 24a8 8 0 0 0 9 4c25-6 46-16 61-30a8 8 0 0 0 3-8L206 59a8 8 0 0 0-5-5 176 176 0 0 0-30-9 8 8 0 0 0-9 5l-8 24m-53 108-12 24a8 8 0 0 1-9 4c-25-6-46-16-61-30a8 8 0 0 1-3-8L50 59a8 8 0 0 1 5-5 176 176 0 0 1 30-9 8 8 0 0 1 9 5l8 24"/>`,
  "linkedin-logo": `<rect width="184" height="184" x="36" y="36" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" rx="8"/><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M120 112v64m-32-64v64m32-36a28 28 0 0 1 56 0v36"/><circle stroke="none" cx="88" cy="80" r="12"/>`,
  "instagram-logo": `<circle cx="128" cy="128" r="40" fill="none" stroke-miterlimit="10" stroke-width="16"/><rect width="184" height="184" x="36" y="36" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" rx="48"/><circle cx="180" cy="76" r="12" stroke="none" />`,
  "tiktok-logo": `<path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" d="M168 106a96 96 0 0 0 56 18V84a56 56 0 0 1-56-56h-40v128a28 28 0 1 1-40-25V89a68 68 0 1 0 80 67Z"/>`
};

const $$Astro$j = createAstro();
const $$Icon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$Icon;
  const { color = "currentcolor", gradient, icon, size } = Astro2.props;
  const iconPath = iconPaths[icon];
  const attrs = {};
  if (size)
    attrs.style = { "--size": size };
  const gradientId = "icon-gradient-" + Math.round(Math.random() * 1e13).toString(36);
  return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256" aria-hidden="true"${addAttribute(gradient ? `url(#${gradientId})` : color, "stroke")}${addAttribute(gradient ? `url(#${gradientId})` : color, "fill")}${spreadAttributes(attrs, "attrs", { "class": "astro-PATNJMLL" })}>
	<g class="astro-PATNJMLL">${unescapeHTML(iconPath)}</g>
	${gradient && renderTemplate`<linearGradient${addAttribute(gradientId, "id")} x1="23" x2="235" y1="43" y2="202" gradientUnits="userSpaceOnUse" class="astro-PATNJMLL">
				<stop stop-color="var(--gradient-stop-1)" class="astro-PATNJMLL"></stop>
				<stop offset=".5" stop-color="var(--gradient-stop-2)" class="astro-PATNJMLL"></stop>
				<stop offset="1" stop-color="var(--gradient-stop-3)" class="astro-PATNJMLL"></stop>
			</linearGradient>`}
</svg>`;
}, "/Users/jbarbeau/Sites/homepage/src/components/Icon.astro");

const $$Astro$i = createAstro();
const $$ThemeToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$ThemeToggle;
  return renderTemplate`${renderComponent($$result, "theme-toggle", "theme-toggle", { "class": "astro-X3PJSKD3" }, { "default": () => renderTemplate`
	${maybeRenderHead($$result)}<button class="astro-X3PJSKD3">
		<span class="sr-only astro-X3PJSKD3">Dark theme</span>
		<span class="icon light astro-X3PJSKD3">${renderComponent($$result, "Icon", $$Icon, { "icon": "sun", "class": "astro-X3PJSKD3" })}</span>
		<span class="icon dark astro-X3PJSKD3">${renderComponent($$result, "Icon", $$Icon, { "icon": "moon-stars", "class": "astro-X3PJSKD3" })}</span>
	</button>
` })}`;
}, "/Users/jbarbeau/Sites/homepage/src/components/ThemeToggle.astro");

const $$Astro$h = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Nav;
  const textLinks = [
    { label: "Home", href: "/" },
    { label: "Exhibitions", href: "/exhibition/" },
    { label: "About", href: "/about/" }
  ];
  const iconLinks = [
    { label: "Twitter", href: "https://twitter.com/me", icon: "twitter-logo" },
    { label: "Twitch", href: "https://twitch.tv/me", icon: "twitch-logo" },
    { label: "GitHub", href: "https://github.com/me", icon: "github-logo" },
    { label: "CodePen", href: "https://codepen.io/me", icon: "codepen-logo" },
    { label: "dribbble", href: "https://dribbble.com/me", icon: "dribbble-logo" },
    { label: "YouTube", href: "https://www.youtube.com/@me/", icon: "youtube-logo" }
  ];
  return renderTemplate`${maybeRenderHead($$result)}<nav class="astro-DMQPWCEC">
	<div class="menu-header astro-DMQPWCEC">
		<a href="/" class="site-title astro-DMQPWCEC">
			${renderComponent($$result, "Icon", $$Icon, { "icon": "terminal-window", "color": "var(--gray-999)", "size": "1.6em", "gradient": true, "class": "astro-DMQPWCEC" })}
			JBarbeau.art
		</a>
		${renderComponent($$result, "menu-button", "menu-button", { "class": "astro-DMQPWCEC" }, { "default": () => renderTemplate`
			<template class="astro-DMQPWCEC">
				<button class="menu-button astro-DMQPWCEC" aria-expanded="false">
					<span class="sr-only astro-DMQPWCEC">Menu</span>
					${renderComponent($$result, "Icon", $$Icon, { "icon": "list", "class": "astro-DMQPWCEC" })}
				</button>
			</template>
		` })}
	</div>
	<div id="menu-content" class="astro-DMQPWCEC">
		<ul class="nav-items astro-DMQPWCEC">
			${textLinks.map(({ label, href }) => renderTemplate`<li class="astro-DMQPWCEC">
						<a${addAttribute(Astro2.url.pathname === href, "aria-current")}${addAttribute([[
    "link",
    {
      active: Astro2.url.pathname === href || href !== "/" && Astro2.url.pathname.startsWith(href)
    }
  ], "astro-DMQPWCEC"], "class:list")}${addAttribute(href, "href")}>
							${label}
						</a>
					</li>`)}
		</ul>
		<div class="menu-footer astro-DMQPWCEC">
			<div class="socials astro-DMQPWCEC">
				${iconLinks.map(({ href, icon, label }) => renderTemplate`<a${addAttribute(href, "href")} class="social astro-DMQPWCEC">
							<span class="sr-only astro-DMQPWCEC">${label}</span>
							${renderComponent($$result, "Icon", $$Icon, { "icon": icon, "class": "astro-DMQPWCEC" })}
						</a>`)}
			</div>

			<div class="theme-toggle astro-DMQPWCEC">
				${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "class": "astro-DMQPWCEC" })}
			</div>
		</div>
	</div>
</nav>`;
}, "/Users/jbarbeau/Sites/homepage/src/components/Nav.astro");

const $$Astro$g = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Footer;
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead($$result)}<footer class="astro-SZ7XMLTE">
	<div class="group astro-SZ7XMLTE">
		<p class="astro-SZ7XMLTE">
			Designed & Developed in Portland with <a href="https://astro.build/" class="astro-SZ7XMLTE">Astro</a>
			${renderComponent($$result, "Icon", $$Icon, { "icon": "rocket-launch", "size": "1.2em", "class": "astro-SZ7XMLTE" })}
		</p>
		<p class="astro-SZ7XMLTE">&copy; ${currentYear} Jonathan Barbeau</p>
	</div>
	<p class="socials astro-SZ7XMLTE">
		<a href="https://twitter.com/me" class="astro-SZ7XMLTE"> Twitter</a>
		<a href="https://github.com/me" class="astro-SZ7XMLTE"> GitHub</a>
		<a href="https://codepen.io/me" class="astro-SZ7XMLTE"> CodePen</a>
	</p>
</footer>`;
}, "/Users/jbarbeau/Sites/homepage/src/components/Footer.astro");

const $$Astro$f = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en" class="astro-37FXCHFA">
	<head>
		${renderComponent($$result, "MainHead", $$MainHead, { "title": title, "description": description, "class": "astro-37FXCHFA" })}
	${renderHead($$result)}</head>
	<body class="astro-37FXCHFA">
		<div class="stack backgrounds astro-37FXCHFA">
			${renderComponent($$result, "Nav", $$Nav, { "class": "astro-37FXCHFA" })}
			${renderSlot($$result, $$slots["default"])}
			${renderComponent($$result, "Footer", $$Footer, { "class": "astro-37FXCHFA" })}
		</div>

		

		
	</body>
</html>`;
}, "/Users/jbarbeau/Sites/homepage/src/layouts/BaseLayout.astro");

const $$Astro$e = createAstro();
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")} class="astro-BALV45LP">${renderSlot($$result, $$slots["default"])}</a>`;
}, "/Users/jbarbeau/Sites/homepage/src/components/CallToAction.astro");

const $$Astro$d = createAstro();
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Grid;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<ul data-gallery${addAttribute([["grid", { offset: variant === "offset", small: variant === "small" }], "astro-VC5TSDMU"], "class:list")}>
	${renderSlot($$result, $$slots["default"])}
</ul>`;
}, "/Users/jbarbeau/Sites/homepage/src/components/Grid.astro");

const $$Astro$c = createAstro();
const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Hero;
  const { align = "center", tagline, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<header${addAttribute([["hero stack gap-4", align], "astro-BBE6DXRZ"], "class:list")}>
	<div class="stack gap-2 astro-BBE6DXRZ">
		<h1 class="title astro-BBE6DXRZ">${title}</h1>
		${tagline && renderTemplate`<p class="tagline astro-BBE6DXRZ">${tagline}</p>`}
	</div>
	${renderSlot($$result, $$slots["default"])}
</header>`;
}, "/Users/jbarbeau/Sites/homepage/src/components/Hero.astro");

const $$Astro$b = createAstro();
const $$Pill = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Pill;
  return renderTemplate`${maybeRenderHead($$result)}<div class="pill astro-2QEYWK4B">${renderSlot($$result, $$slots["default"])}</div>`;
}, "/Users/jbarbeau/Sites/homepage/src/components/Pill.astro");

const $$Astro$a = createAstro();
const $$ContactCTA = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$ContactCTA;
  return renderTemplate`${maybeRenderHead($$result)}<aside class="astro-RCDZUQ3A">
	<h2 class="astro-RCDZUQ3A">Interested in working together?</h2>
	${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "mailto:me@example.com", "class": "astro-RCDZUQ3A" }, { "default": ($$result2) => renderTemplate`
		Send Me a Message
		${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "class": "astro-RCDZUQ3A" })}
	` })}
</aside>`;
}, "/Users/jbarbeau/Sites/homepage/src/components/ContactCTA.astro");

const $$Astro$9 = createAstro();
const $$ExhibitionPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ExhibitionPreview;
  const { data, slug } = Astro2.props.project;
  const { type } = Astro2.props;
  return renderTemplate`<!-- test -->${maybeRenderHead($$result)}<a class="card astro-LALKGA2N"${addAttribute(`/${type}/${slug}`, "href")}>
	<span class="title astro-LALKGA2N">${data.title}</span>
	<img${addAttribute(data.img, "src")}${addAttribute(data.img_alt || "", "alt")} loading="lazy" decoding="async" class="astro-LALKGA2N">
</a>`;
}, "/Users/jbarbeau/Sites/homepage/src/components/ExhibitionPreview.astro");

const $$Astro$8 = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Index;
  const projects = (await getCollection("exhibition")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 4);
  const collectionName = "exhibition";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="stack gap-20 lg:gap-48 astro-J7PV25F6">
		<div class="wrapper stack gap-8 lg:gap-20 astro-J7PV25F6">
			<header class="hero astro-J7PV25F6">
				<img alt="Jonathan Barbeau Profile Picture" width="480" height="620" src="/assets/pfp1.webp" class="astro-J7PV25F6">
				${renderComponent($$result2, "Hero", $$Hero, { "title": "Hi! I\u2019m Jonathan Barbeau.", "tagline": "I am a Generative Artist and Creative Developer based in Qu\xE9bec City, Canada.", "align": "start", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`
					<div class="roles astro-J7PV25F6">
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "artist", "size": "1.33em", "class": "astro-J7PV25F6" })} Artist` })}
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "class": "astro-J7PV25F6" })} Developer` })}
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "designer", "size": "1.33em", "class": "astro-J7PV25F6" })} Designer` })}
					</div>
				` })}
			</header>
		</div>

		<main class="wrapper stack gap-20 lg:gap-48 astro-J7PV25F6">
			<section class="section with-cta astro-J7PV25F6">
				<header class="section-header stack gap-2 lg:gap-4 astro-J7PV25F6">
					<h3 class="astro-J7PV25F6">Selected Work</h3>
					<p class="astro-J7PV25F6">Take a look below at some of my featured work for clients from the past few years.</p>
				</header>

				<div class="gallery astro-J7PV25F6">
					${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li data-gallery class="astro-J7PV25F6">
									${renderComponent($$result3, "ExhibitionPreview", $$ExhibitionPreview, { "type": collectionName, "project": project, "class": "astro-J7PV25F6" })}
								</li>`)}` })}
				</div>

				<div class="cta astro-J7PV25F6">
					${renderComponent($$result2, "CallToAction", $$CallToAction, { "href": "/work/", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`
						View All
						${renderComponent($$result3, "Icon", $$Icon, { "icon": "arrow-right", "size": "1.2em", "class": "astro-J7PV25F6" })}
					` })}
				</div>
			</section>

			<section class="section bg-variant astro-J7PV25F6">
				<header class="section-header stack gap-2 lg:gap-4 astro-J7PV25F6">
					<h3 class="astro-J7PV25F6">Web3 Marketplaces</h3>
					<p class="astro-J7PV25F6">
						I have been fortunate enough to recieve praise for my work in several publications. Take a look below to
						learn more.
					</p>
				</header>

				<div class="gallery astro-J7PV25F6">
					${renderComponent($$result2, "Grid", $$Grid, { "variant": "small", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`${["Foundation", "Teia.art", "OBJKT", "FX(hash).", "Versum"].map((brand) => renderTemplate`<li class="mention-card astro-J7PV25F6">
									<p class="astro-J7PV25F6">${brand}</p>
								</li>`)}` })}
				</div>
			</section>
		</main>

		${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-J7PV25F6" })}
	</div>
` })}`;
}, "/Users/jbarbeau/Sites/homepage/src/pages/index.astro");

const $$file$6 = "/Users/jbarbeau/Sites/homepage/src/pages/index.astro";
const $$url$6 = "";

const _page0 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file$6,
	url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro();
const $$SingleGallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$SingleGallery;
  const { id, gallery, baseURL } = Astro2.props;
  const galleryKeys = Object.keys(gallery);
  return renderTemplate`${maybeRenderHead($$result)}<div class="gallery astro-GJ3D7SM2">
	<h3 class="gallery__title astro-GJ3D7SM2">Gallerie</h3>
	<p class="gallery__text astro-GJ3D7SM2">Voici différents rendu de cet algorithme</p>
	<div class="gallery__grid astro-GJ3D7SM2">
		${galleryKeys?.map((key) => {
    const image = gallery[key];
    return renderTemplate`<div class="gallery__item astro-GJ3D7SM2">
						<img${addAttribute(image.attributes.alternativeText, "alt")} class="gallery__image astro-GJ3D7SM2"${addAttribute(`${baseURL}${image?.attributes.url}`, "src")}>
					</div>`;
  })}
	</div>
</div>`;
}, "/Users/jbarbeau/Sites/homepage/src/components/SingleGallery.astro");

const $$Astro$6 = createAstro();
async function getStaticPaths$1() {
  const exhibition = await getCollection("exhibition");
  return exhibition.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$$1;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  const id = Number(entry.id.split(".")[0]);
  const response = await fetch("http://localhost:1337/api/artworks?populate=*");
  const json = await response.json();
  const baseURL = "http://localhost:1337";
  const artworks = json.data.map((artwork) => artwork);
  const matchingArtwork = artworks.find((artwork) => artwork.id === id);
  const single = matchingArtwork ? matchingArtwork.attributes : null;
  const image = matchingArtwork ? matchingArtwork.attributes.Image.data.attributes : null;
  const imageURL = matchingArtwork ? baseURL + image.url : null;
  const gallery = matchingArtwork ? matchingArtwork.attributes.Gallery.data : null;
  const tags = matchingArtwork ? matchingArtwork.attributes.tagGroup : null;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": single?.Title, "description": single?.Description, "class": "astro-UDG5PBYF" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="stack gap-20 astro-UDG5PBYF">
		<div class="stack gap-15 astro-UDG5PBYF">
			<header class="astro-UDG5PBYF">
				<div class="wrapper stack gap-2 astro-UDG5PBYF">
					<a class="back-link astro-UDG5PBYF" href="/exhibition/">${renderComponent($$result2, "Icon", $$Icon, { "icon": "arrow-left", "class": "astro-UDG5PBYF" })} Exhibitions</a>
					${renderComponent($$result2, "Hero", $$Hero, { "title": single?.Title, "align": "start", "class": "astro-UDG5PBYF" }, { "default": ($$result3) => renderTemplate`
						<div class="details astro-UDG5PBYF">
							<div class="tags astro-UDG5PBYF">
								${tags?.map((tag) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "class": "astro-UDG5PBYF" }, { "default": ($$result4) => renderTemplate`
											${renderComponent($$result4, "Pill", $$Pill, { "class": "astro-UDG5PBYF" }, { "default": ($$result5) => renderTemplate`${tag?.text}` })}
										` })}`)}
							</div>
							<p class="description astro-UDG5PBYF">${single?.Description}</p>
						</div>
					` })}
				</div>
			</header>
			<main class="wrapper astro-UDG5PBYF">
				<div class="stack gap-10 content astro-UDG5PBYF">
					${imageURL && renderTemplate`<img${addAttribute(imageURL, "src")}${addAttribute(image?.alternativeText || "", "alt")} class="astro-UDG5PBYF">`}
					${renderComponent($$result2, "SingleGallery", $$SingleGallery, { "id": id, "gallery": gallery, "baseURL": baseURL, "class": "astro-UDG5PBYF" })}
					<div class="content astro-UDG5PBYF">
						${renderComponent($$result2, "Content", Content, { "class": "astro-UDG5PBYF" })}
					</div>
				</div>
			</main>
		</div>
		${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-UDG5PBYF" })}
	</div>
` })}`;
}, "/Users/jbarbeau/Sites/homepage/src/pages/exhibition/[...slug].astro");

const $$file$5 = "/Users/jbarbeau/Sites/homepage/src/pages/exhibition/[...slug].astro";
const $$url$5 = "/exhibition/[...slug]";

const _page1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$$1,
	file: $$file$5,
	getStaticPaths: getStaticPaths$1,
	url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro();
const $$Exhibition = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Exhibition;
  const collectionName = "exhibition";
  const projects = await getCollection("exhibition");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "JBarbeau.art x Korrigane ", "description": "Exposition des oeuvres de Jonathan Barbeau \xE0 la korrigane." }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="stack gap-20">
		<main class="wrapper stack gap-8">
			${renderComponent($$result2, "Hero", $$Hero, { "title": "Vernissage Korrigane", "tagline": "Voici mes oeuvres pr\xE9sentement expos\xE9 \xE0 la Korrigane cet \xE9t\xE9.", "align": "start" })}
			${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li>
							${renderComponent($$result3, "ExhibitionPreview", $$ExhibitionPreview, { "type": collectionName, "project": project })}
						</li>`)}` })}
		</main>
		${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})}
	</div>
` })}`;
}, "/Users/jbarbeau/Sites/homepage/src/pages/exhibition.astro");

const $$file$4 = "/Users/jbarbeau/Sites/homepage/src/pages/exhibition.astro";
const $$url$4 = "/exhibition";

const _page2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Exhibition,
	file: $$file$4,
	url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About | Jonathan Barbeau", "description": "About Jonathan Barbeau Lorem Ipsum", "class": "astro-KH7BTL4R" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="stack gap-20 astro-KH7BTL4R">
		<main class="wrapper about astro-KH7BTL4R">
			${renderComponent($$result2, "Hero", $$Hero, { "title": "About", "tagline": "Thanks for stopping by. Read below to learn more about myself and my background.", "class": "astro-KH7BTL4R" }, { "default": ($$result3) => renderTemplate`
				<img width="1553" height="873" src="/assets/pfp1.webp" alt="Image of Jonathan Barbeau" class="astro-KH7BTL4R">
			` })}

			<section class="astro-KH7BTL4R">
				<h2 class="section-title astro-KH7BTL4R">Background</h2>
				<div class="content astro-KH7BTL4R">
					<p class="astro-KH7BTL4R">
						Lorem ipsum dolor sit amet, <a href="https://astro.build/" class="astro-KH7BTL4R">Astro</a> makes people happy. Sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua. Proin nibh nisl condimentum id venenatis a condimentum vitae. Dapibus
						ultrices in iaculis nunc. Arcu odio ut sem nulla pharetra diam sit amet. Diam quis enim lobortis scelerisque
						fermentum dui faucibus in ornare.
					</p>
					<p class="astro-KH7BTL4R">
						Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Eget gravida cum sociis natoque penatibus.
						Cras fermentum odio eu feugiat pretium nibh. Proin nibh nisl condimentum id venenatis. Porta nibh venenatis
						cras sed felis eget velit. Id diam vel quam elementum pulvinar etiam non.
					</p>
					<p class="astro-KH7BTL4R">
						Ultrices tincidunt arcu non sodales neque sodales ut. Sed enim ut sem viverra aliquet eget sit amet. Lacus
						luctus accumsan tortor posuere ac ut consequat semper viverra. Viverra accumsan in nisl nisi scelerisque eu
						ultrices. In massa tempor nec feugiat nisl pretium fusce.
					</p>
				</div>
			</section>
			<section class="astro-KH7BTL4R">
				<h2 class="section-title astro-KH7BTL4R">Education</h2>
				<div class="content astro-KH7BTL4R">
					<p class="astro-KH7BTL4R">Corporis voluptates tenetur laudantium.</p>
				</div>
			</section>
			<section class="astro-KH7BTL4R">
				<h2 class="section-title astro-KH7BTL4R">Skills</h2>
				<div class="content astro-KH7BTL4R">
					<p class="astro-KH7BTL4R">officia unde omnis</p>
				</div>
			</section>
		</main>

		${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-KH7BTL4R" })}
	</div>
` })}`;
}, "/Users/jbarbeau/Sites/homepage/src/pages/about.astro");

const $$file$3 = "/Users/jbarbeau/Sites/homepage/src/pages/about.astro";
const $$url$3 = "/about";

const _page3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file$3,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro();
async function getStaticPaths() {
  const work = await getCollection("work");
  return work.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.data.title, "description": entry.data.description, "class": "astro-QWEKCIQP" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="stack gap-20 astro-QWEKCIQP">
		<div class="stack gap-15 astro-QWEKCIQP">
			<header class="astro-QWEKCIQP">
				<div class="wrapper stack gap-2 astro-QWEKCIQP">
					<a class="back-link astro-QWEKCIQP" href="/exhibition/">${renderComponent($$result2, "Icon", $$Icon, { "icon": "arrow-left", "class": "astro-QWEKCIQP" })} Exhibitions</a>
					${renderComponent($$result2, "Hero", $$Hero, { "title": entry.data.title, "align": "start", "class": "astro-QWEKCIQP" }, { "default": ($$result3) => renderTemplate`
						<div class="details astro-QWEKCIQP">
							<div class="tags astro-QWEKCIQP">
								${entry.data.tags.map((t) => renderTemplate`${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-QWEKCIQP" }, { "default": ($$result4) => renderTemplate`${t}` })}`)}
							</div>
							<p class="description astro-QWEKCIQP">${entry.data.description}</p>
						</div>
					` })}
				</div>
			</header>
			<main class="wrapper astro-QWEKCIQP">
				<div class="stack gap-10 content astro-QWEKCIQP">
					${entry.data.img && renderTemplate`<img${addAttribute(entry.data.img, "src")}${addAttribute(entry.data.img_alt || "", "alt")} class="astro-QWEKCIQP">`}
					<div class="content astro-QWEKCIQP">
						${renderComponent($$result2, "Content", Content, { "class": "astro-QWEKCIQP" })}
					</div>
				</div>
			</main>
		</div>
		${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-QWEKCIQP" })}
	</div>
` })}`;
}, "/Users/jbarbeau/Sites/homepage/src/pages/work/[...slug].astro");

const $$file$2 = "/Users/jbarbeau/Sites/homepage/src/pages/work/[...slug].astro";
const $$url$2 = "/work/[...slug]";

const _page4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file$2,
	getStaticPaths,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro();
const $$WorkPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$WorkPreview;
  const { data, slug } = Astro2.props.project;
  const { type } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a class="card astro-K3CSAH2O"${addAttribute(`/${type}/${slug}`, "href")}>
	<span class="title astro-K3CSAH2O">${data.title}</span>
	<img${addAttribute(data.img, "src")}${addAttribute(data.img_alt || "", "alt")} loading="lazy" decoding="async" class="astro-K3CSAH2O">
</a>`;
}, "/Users/jbarbeau/Sites/homepage/src/components/WorkPreview.astro");

const $$Astro$1 = createAstro();
const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Work;
  const projects = await getCollection("work");
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "JBarbeau.art x Korrigane ", "description": "Exposition des oeuvres de Jonathan Barbeau \xE0 la korrigane." }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="stack gap-20">
		<main class="wrapper stack gap-8">
			${renderComponent($$result2, "Hero", $$Hero, { "title": "Vernissage Korrigane", "tagline": "Voici mes oeuvres", "align": "start" })}
			${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li>
							${renderComponent($$result3, "WorkPreview", $$WorkPreview, { "type": "work", "project": project })}
						</li>`)}` })}
		</main>
		${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})}
	</div>
` })}`;
}, "/Users/jbarbeau/Sites/homepage/src/pages/work.astro");

const $$file$1 = "/Users/jbarbeau/Sites/homepage/src/pages/work.astro";
const $$url$1 = "/work";

const _page5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Work,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro();
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Not Found", "description": "404 Error \u2014 this page was not found" }, { "default": ($$result2) => renderTemplate`
	${renderComponent($$result2, "Hero", $$Hero, { "title": "Page Not Found", "tagline": "Not found" })}
` })}`;
}, "/Users/jbarbeau/Sites/homepage/src/pages/404.astro");

const $$file = "/Users/jbarbeau/Sites/homepage/src/pages/404.astro";
const $$url = "/404";

const _page6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page0 as _, _page1 as a, _page2 as b, _page3 as c, _page4 as d, _page5 as e, _page6 as f };
