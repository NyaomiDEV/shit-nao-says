// @ts-check

import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://nao.mom',
	trailingSlash: 'never',
	compressHTML: true,
	build: {
		format: "file",
		assets: "assets",
		inlineStylesheets: "never"
	},
	integrations: [mdx()],
});
