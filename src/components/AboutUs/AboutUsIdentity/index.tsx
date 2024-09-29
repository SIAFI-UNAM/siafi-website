"use client";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "./AboutUsIdentity.module.css";
import PageSection from "@/components/General/PageSection";
import { PortableTextBlock } from "sanity";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { starIcon } from "@/image-paths";

type AboutUsIdentityProps = {
	/**
	 * The identity information from Sanity CMS.
	 */
	identityInfo: {
		title: string;
		mision: PortableTextBlock[];
		vision: PortableTextBlock[];
		values: PortableTextBlock[];
	};
};

/**
 * About us identity component for the about us page.
 * @param props - The props.
 * @returns The about us identity component.
 */
const AboutUsIdentity = ({ identityInfo }: AboutUsIdentityProps) => {
	return (
		<div className="container position-relative">
			<Image
				src={starIcon}
				className={styles.starIcon}
				alt="star icon"
				width={25}
				height={25}
			/>
			<Carousel
				className={styles.identityCarousel}
				variant="dark"
				controls={false}
			>
				<Carousel.Item>
					<PageSection subtitle="NUESTRA IDENTIDAD" title="Misión">
						<div className={styles.identityDescription}>
							<PortableText value={identityInfo.mision} />
						</div>
					</PageSection>
				</Carousel.Item>
				<Carousel.Item>
					<PageSection subtitle="NUESTRA IDENTIDAD" title="Visión">
						<div className={styles.identityDescription}>
							<PortableText value={identityInfo.vision} />
						</div>
					</PageSection>
				</Carousel.Item>
				<Carousel.Item>
					<PageSection
						subtitle="NUESTRA IDENTIDAD"
						title="Nuestros valores"
					>
						<div className={styles.identityDescription}>
							<PortableText value={identityInfo.values} />
						</div>
					</PageSection>
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default AboutUsIdentity;
