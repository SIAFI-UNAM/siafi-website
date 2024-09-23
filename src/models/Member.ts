import type { PortableTextBlock } from "sanity";

export type Member = {
	_id: string;
	name: string;
	username: string;
	socialMediaLink: string;
	role: string;
	description: PortableTextBlock[];
	image: {
		alt: string;
		url: string;
	};
	email: string;
};
