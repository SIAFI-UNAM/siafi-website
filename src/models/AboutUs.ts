import type { PortableTextBlock } from "sanity";

export type SIAFICore = {
	_key: string;
	name: string;
	description: string;
	image: {
		alt: string;
		url: string;
	};
};

export type AboutUsPage = {
	title: string;
	subtitle: string;
	hero_image: {
		alt: string;
		url: string;
	};
	siafi_cores: {
		title: string;
		subtitle: string;
		description: string;
		cores: SIAFICore[];
	};
	identity: {
		title: string;
		mision: PortableTextBlock[];
		vision: PortableTextBlock[];
		values: PortableTextBlock[];
	};
};
