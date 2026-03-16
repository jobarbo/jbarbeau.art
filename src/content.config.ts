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

export const collections = {project, collectionPreview};

