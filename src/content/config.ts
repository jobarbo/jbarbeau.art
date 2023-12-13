import {defineCollection, z} from "astro:content";

export const collections = {
	project: defineCollection({
		schema: z.object({
			title: z.string(),
			publishDate: z.coerce.date(),
			subtitle: z.string().optional(),
			description: z.string(),
			url: z.string(),
			images: z.array(z.string()).optional(),
		}),
	}),
};
