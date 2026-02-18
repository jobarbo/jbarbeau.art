import {defineConfig} from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://jbarbeau.art",
	integrations: [
		sitemap({
			filter: (page) =>
				!page.includes("/admin") && !page.includes("/local_admin"),
			// Guarantee main static pages are always in the sitemap (in case discovery misses them)
			customPages: [
				"https://jbarbeau.art/",
				"https://jbarbeau.art/blog",
				"https://jbarbeau.art/docs/artist-cv",
				"https://jbarbeau.art/docs/artist-cv-fr",
				"https://jbarbeau.art/docs/cv",
				"https://jbarbeau.art/docs/cv-fr",
			],
		}),
		tailwind(),
	],
	devToolbar: {
		enabled: false,
	},
	output: "static",
	server: {
		port: 4321,
		host: true,
	},
	// Ensure the build outputs files as-is
	build: {
		format: "file",
	},
});
