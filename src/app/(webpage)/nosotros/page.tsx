import type { Metadata } from "next";
import PageSection from "@/components/General/PageSection";
import React from "react";
import AboutUsHero from "@/components/AboutUs/AboutUsHero";
import { getAboutUsInfo, getContactInfo } from "@/sanity/sanity-utils";

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

	return (
		<>
			<AboutUsHero
				title={aboutInfo.title}
				subtitle={aboutInfo.subtitle}
				heroImage={aboutInfo.hero_image}
				contactInfo={contactInfo}
			/>
		</>
	);
};

export default AboutUsPage;
