import {defineCollection, z} from "astro:content";
import {glob} from "astro/loaders";

const project = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/project",
	}),
	schema: z.object({
		title: z.string(),
		publishDate: z.coerce.date(),
		subtitle: z.string().optional(),
		subtitleFr: z.string().optional(),
		description: z.string(),
		descriptionFr: z.string().optional(),
		url: z.string(),
		isRedeemable: z.boolean().optional(),
		redeemUrl: z.string().optional(),
		images: z.array(z.string()).optional(),
		slider: z.array(z.string()).optional(),
	}),
});

const collectionPreview = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/collection-preview",
	}),
	schema: z.object({
		title: z.string(),
		images: z.array(z.string()).optional(),
	}),
});

const blog = defineCollection({
	loader: glob({
		pattern: "**/*.{md,mdx}",
		base: "./src/content/blog",
	}),
	schema: z.object({
		title: z.string(),
		pubDate: z.coerce.date(),
		substackUrl: z.string(),
		image: z.string().optional(),
		excerpt: z.string().optional(),
		draft: z.boolean().default(false),
	}),
});

const shop = defineCollection({
	loader: glob({
		pattern: "**/*.md",
		base: "./src/content/shop",
	}),
	schema: z.object({
		title: z.string(),
		titleFr: z.string().optional(),
		type: z.enum(["digital", "print", "nft"]),
		status: z.enum(["available", "upcoming", "minting", "soldout"]).default("available"),
		// Display-only strings ("250 CAD", "0.05 ETH") — Stripe will own real pricing later
		price: z.string().optional(),
		priceFr: z.string().optional(),
		editionInfo: z.string().optional(),
		editionInfoFr: z.string().optional(),
		description: z.string(),
		descriptionFr: z.string().optional(),
		images: z.array(z.string()).min(1),
		externalUrl: z.string().optional(),
		platform: z.string().optional(),
		stripePriceId: z.string().optional(),
		publishDate: z.coerce.date(),
		draft: z.boolean().default(false),
	}),
});

export const collections = {project, collectionPreview, blog, shop};

