import type { Metadata } from "next";
import PageSection from "@/components/General/PageSection";
import React from "react";
import AboutUsHero from "@/components/AboutUs/AboutUsHero";
import { getAboutUsInfo } from "@/sanity/sanity-utils";

export const metadata: Metadata = {
	title: "Sobre nosotros",
};

/**
 * About us page component.
 * @returns {React.ReactElement} The about us page component.
 */
const AboutUsPage = async () => {
	const aboutInfo = await getAboutUsInfo();

	return (
		<>
			<AboutUsHero />
		</>
	);
};

export default AboutUsPage;
