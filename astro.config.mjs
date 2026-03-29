import {defineConfig} from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://jbarbeau.art",
	i18n: {
		locales: ["en", "fr"],
		defaultLocale: "en",
		routing: {
			prefixDefaultLocale: false,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
	integrations: [
		mdx(),
		sitemap({
			filter: (page) => !page.includes("/admin") && !page.includes("/local_admin") && !page.includes("/collection-preview"),
			// Guarantee main static pages are always in the sitemap (in case discovery misses them)
			customPages: [
				"https://jbarbeau.art/",
				"https://jbarbeau.art/blog",
				"https://jbarbeau.art/fr/",
				"https://jbarbeau.art/fr/blog",
				"https://jbarbeau.art/fr/docs/artist-cv",
				"https://jbarbeau.art/docs/artist-cv",
				"https://jbarbeau.art/docs/artist-cv-fr",
				"https://jbarbeau.art/docs/cv",
				"https://jbarbeau.art/docs/cv-fr",
			],
		}),
	],
	image: {
		remotePatterns: [
			{protocol: "https", hostname: "substackcdn.com"},
			{protocol: "https", hostname: "substack-post-media.s3.amazonaws.com"},
		],
	},
	devToolbar: {
		enabled: false,
	},
	output: "static",
	server: {
		port: 4321,
		host: true,
	},
});
