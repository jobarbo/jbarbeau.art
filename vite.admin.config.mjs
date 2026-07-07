import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {resolve} from "path";

export default defineConfig({
	publicDir: false,
	plugins: [react()],
	define: {
		global: "globalThis",
	},
	build: {
		outDir: "public/admin",
		emptyOutDir: false,
		lib: {
			entry: resolve(__dirname, "src/admin/main.js"),
			name: "DecapCMS",
			formats: ["iife"],
		},
		rollupOptions: {
			output: {
				entryFileNames: "decap-cms.js",
			},
		},
	},
});
