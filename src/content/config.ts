import {defineCollection, z} from "astro:content";

console.log(z);

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

export const collections = {
	project: projectCollection,
};
