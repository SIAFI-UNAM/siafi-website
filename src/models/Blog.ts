import type { PortableTextBlock } from "sanity";
import type { Author } from "./Author";

export type BlogInfo = {
	_id: string;
	_createdAt: Date;
	title: string;
	slug: string;
	image: string;
	category: string;
	publishedAt: string;
	author: Author;
	content: PortableTextBlock[];
};
