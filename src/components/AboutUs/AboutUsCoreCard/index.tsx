import { SIAFICore } from "@/models/AboutUs";
import Image from "next/image";
import React from "react";
import styles from "./AboutUsCoreCard.module.css";

interface AboutUsCoreCardProps {
	/**
	 * The core information from Sanity CMS.
	 */
	coreInfo: SIAFICore;
}

/**
 * Card component for the cores of SIAFI carousel in the about us page.
 * @param props - The props of the component.
 * @returns The about us core card component.
 */
const AboutUsCoreCard = ({ coreInfo }: AboutUsCoreCardProps) => {
	return (
		<div className={styles.card}>
			<Image
				src={coreInfo.image.url}
				alt={coreInfo.image.alt}
				width={300}
				height={300}
				className={styles.coreImage}
			/>
			<div>
				<h4 className={styles.coreName}>{coreInfo.name}</h4>
				<p className={styles.coreDescription}>{coreInfo.description}</p>
			</div>
		</div>
	);
};

export default AboutUsCoreCard;
