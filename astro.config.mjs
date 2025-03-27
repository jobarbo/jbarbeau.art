import {defineConfig} from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
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
