import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			language: z.string(),
			pinned: z.boolean().optional(),
			draft: z.boolean().optional(),
  disableComments: z.boolean().optional()
		}),
});

export const collections = { blog };
