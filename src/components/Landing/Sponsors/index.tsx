"use client";
import React, { useEffect } from "react";
import styles from "./Sponsors.module.css";
import Image from "next/image";
import type { SponsorInfo } from "@/models/Sponsor";

type Props = {
	sponsors: SponsorInfo[];
};

/**
 * This component displays the sponsors of SIAFI on the landing page.
 * @param {Props} props - The props of the component.
 * @returns {JSX.Element} Sponsors component.}
 * @todo: Implement a carousel for the sponsors.
 */
export default function Sponsors({ sponsors }: Props) {
	useEffect(() => {
		const root = document.documentElement;
		const slideWidth = 150; // Width of each slide
		const numSlides = sponsors.length;
		const trackWidth = slideWidth * numSlides;
		const scrollDistance = -trackWidth + "px";

		root.style.setProperty("--track-width", `${trackWidth}px`);
		root.style.setProperty("--scroll-distance", scrollDistance);
	}, [sponsors]);

	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h2>Ellos confían en nosotros</h2>
			</div>
			<div className={styles.slider}>
				<div className={styles.slideTrack}>
					{sponsors.map((spon) => (
						<div key={spon.name} className={styles.slide}>
							<Image
								width={75}
								height={50}
								src={spon.image.url}
								alt={spon.image.alt}
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
