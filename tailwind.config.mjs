/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			aspectRatio: {
				"3/2": "3 / 2",
				"2/3": "2 / 3",
				"4/3": "4 / 3",
				"3/4": "3 / 4",
				"1/1": "1 / 1",
				"5/6": "5 / 6",
				"6/5": "6 / 5",
				"4/5": "4 / 5",
				"5/4": "5 / 4",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
