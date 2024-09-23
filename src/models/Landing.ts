import { PortableTextBlock } from "sanity";

export type HeroInfo = {
	upperTitle: string;
	middleWords: [string];
	lowerTitle: string;
	siafiGroupImage: string;
};

export type AboutSection = {
	title: string;
	subtitle: string;
	description: PortableTextBlock[];
	image: string;
	cta_text: string;
	cta_link: string;
};

export type ProjectsSection = {
	title: string;
	description: PortableTextBlock[];
};

export type ContactSection = {
	title: string;
	subtitle: string;
};

export type LandingInfo = {
	hero: HeroInfo;
	aboutSection: AboutSection;
	projectsSection: ProjectsSection;
	contactSection: ContactSection;
};
