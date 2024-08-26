import { PortableTextBlock } from "sanity";

export type Author = {
	_id: string;
	name: string;
	avatar: string;
	bio: PortableTextBlock[];
};
