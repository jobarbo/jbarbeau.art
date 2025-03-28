import {defineCollection, z} from "astro:content";

const projectCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		publishDate: z.coerce.date(),
		subtitle: z.string().optional(),
		description: z.string(),
		url: z.string(),
		isRedeemable: z.boolean().optional(),
		redeemUrl: z.string().optional(),
		images: z.array(z.string()).optional(),
		slider: z.array(z.string()).optional(),
	}),
});

const prints = defineCollection({
	type: "content",
	schema: z.object({
		title: z.string(),
		description: z.string(),
		price: z.number(),
		currency: z.string(),
		image: z.string(),
		dimensions: z.string(),
		paper: z.string(),
		edition: z.string(),
		weight: z.number(),
		digital_goods: z.boolean(),
		shipping: z.object({weight: z.number(), width: z.number(), length: z.number(), height: z.number()}),
		publishDate: z.date(),
		featured: z.boolean(),
	}),
});

export const collections = {project: projectCollection, prints};
