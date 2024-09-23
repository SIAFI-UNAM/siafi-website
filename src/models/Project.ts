import type { PortableTextBlock } from "sanity";

export type ProjectInfo = {
	_id: string;
	title: string;
	slug: string;
	description: PortableTextBlock[];
	image: {
		alt: string;
		url: string;
	};
	last_updated: string;
	authors: string[];
};
