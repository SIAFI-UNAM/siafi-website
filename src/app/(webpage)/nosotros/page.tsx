import type { Metadata } from "next";
import React from "react";
import AboutUsHero from "@/components/AboutUs/AboutUsHero";
import {
	getAboutUsInfo,
	getContactInfo,
	getExecutiveBoardMembers,
} from "@/sanity/sanity-utils";
import AboutUsIdentity from "@/components/AboutUs/AboutUsIdentity";
import AboutUsCores from "@/components/AboutUs/AboutUsCores";
import AboutUsExecutiveBoard from "@/components/AboutUs/AboutUsExecutiveBoard";

export const metadata: Metadata = {
	title: "Sobre nosotros",
};

/**
 * About us page component.
 * @returns {React.ReactElement} The about us page component.
 */
const AboutUsPage = async () => {
	const aboutInfo = await getAboutUsInfo();
	const contactInfo = await getContactInfo();
	const executiveBoard = await getExecutiveBoardMembers();

	return (
		<>
			<AboutUsHero
				title={aboutInfo.title}
				subtitle={aboutInfo.subtitle}
				heroImage={aboutInfo.hero_image}
				contactInfo={contactInfo}
			/>
			<AboutUsIdentity identityInfo={aboutInfo.identity} />
			<AboutUsCores coreInfo={aboutInfo.siafi_cores} />
			<AboutUsExecutiveBoard members={executiveBoard} />
		</>
	);
};

export default AboutUsPage;
