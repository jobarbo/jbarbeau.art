import {defineCollection, z} from 'astro:content';

export const collections = {
	work: defineCollection({
		schema: z.object({
			id_tag: z.string(),
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			level: z.number(),
		}),
	}),
	exhibition: defineCollection({
		schema: z.object({
			id_tag: z.string(),
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
			level: z.number(),
		}),
	}),
};
