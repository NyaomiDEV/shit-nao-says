import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import type { AstroGlobal } from "astro";

export async function GET(context: AstroGlobal) {
	const posts = await getCollection("blog");
	return rss({
		title: "Shit Nao Says",
		description: "Nao's blog",
		site: context.site!,
		items: posts.map(post => ({
			...post.data,
			link: `/blog/${post.id}.html`,
		})),
	});
}
