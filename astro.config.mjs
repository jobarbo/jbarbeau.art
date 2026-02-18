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
