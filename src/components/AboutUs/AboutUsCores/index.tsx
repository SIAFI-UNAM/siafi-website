"use client";
import React from "react";
import styles from "./AboutUsCores.module.css";
import { SIAFICore } from "@/models/AboutUs";
import PageSection from "@/components/General/PageSection";
import { Carousel } from "react-responsive-3d-carousel";
import AboutUsCoreCard from "../AboutUsCoreCard";

interface AboutUsCoresProps {
	/**
	 * The core information from Sanity CMS.
	 */
	coreInfo: {
		title: string;
		subtitle: string;
		description: string;
		cores: SIAFICore[];
	};
}

/**
 * Component that explains the "Nucleos" of SIAFI in the about us page.
 * @param props - The props of the component.
 * @returns The about us cores component.
 */
const AboutUsCores = ({ coreInfo }: AboutUsCoresProps) => {
	return (
		<PageSection
			title={coreInfo.title}
			subtitle={coreInfo.subtitle}
			description={coreInfo.description}
		>
			<Carousel
				showStatus={false}
				showArrows={false}
				width="300px"
				height="550px"
				isShadow={false}
				isIndicatorsShadow={false}
				indicatorsActiveColor="var(--primary-color)"
			>
				{coreInfo.cores.map((core) => (
					<AboutUsCoreCard key={core.name} coreInfo={core} />
				))}
			</Carousel>
		</PageSection>
	);
};

export default AboutUsCores;
