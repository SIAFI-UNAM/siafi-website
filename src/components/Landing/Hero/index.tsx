"use client";
import React, { useEffect, useState } from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import {
	arrowHero,
	handsDetectionGIF,
	heartDrawingIcon,
	landingBackgroundGradient,
	robotDrawing,
	siafiStudentsHero,
	vrHeadset,
} from "@/image-paths";
import TextTransition, { presets } from "react-text-transition";
import type { HeroInfo } from "@/models/Landing";
import type { Contact } from "@/models/Contact";

type HeroProps = {
	hero: HeroInfo;
	contact: Contact;
};

export default function Hero({ hero, contact }: HeroProps) {
	const { upperTitle, middleWords, lowerTitle, siafiGroupImage } = hero;
	const { instagram } = contact;
	// Index for words array that can fit between "Inteligencia Artificial" and "Por estudiantes"
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(
			() => setIndex((index) => (index + 1) % middleWords.length),
			5000 // every 3 seconds
		);
		return () => clearTimeout(intervalId);
	}, [middleWords.length]);

	return (
		<section className={`${styles.heroContainer}`}>
			{/* Title and hero main images */}
			<div className="container">
				<div className="row">
					<div className={`col-12 col-md-6 ${styles.heroTexts}`}>
						<p className={styles.heroTitle}>{upperTitle}</p>
						<TextTransition
							springConfig={presets.wobbly}
							className={styles.heroActiveWord}
						>
							{middleWords[index]}
						</TextTransition>
						{/* <p className={styles.heroActiveWord}>Super Cargada</p> */}
						<p className={styles.heroTitle}>{lowerTitle}</p>
						<div className={styles.weLoveAIHero}>
							<p>WE</p>
							<Image
								src={heartDrawingIcon}
								alt="Heart icon"
								priority
							/>
							<p>AI</p>
						</div>
						<div className={styles.arrow}>
							<Image src={arrowHero} alt="Arrow hero" priority />
						</div>
						<div className={styles.robotDrawing}>
							<Image
								src={robotDrawing}
								alt="Robot hero"
								priority
							/>
						</div>
					</div>
					<div className={`col-12 col-md-6 ${styles.heroImages}`}>
						<Image
							src={vrHeadset}
							className={styles.vrHeadset}
							alt="VR Headset"
						/>
						<div className={styles.handsDetectionContainer}>
							<Image
								src={handsDetectionGIF}
								alt="Hands detection"
								priority
							/>
						</div>
						<Image
							src={siafiGroupImage}
							width={700}
							height={500}
							className={styles.siafiStudents}
							alt="SIAFI students"
							priority
						/>
					</div>
				</div>
			</div>
			{/* Absolute posisioned elements on hero */}
			<p className={styles.igFollowUS}>
				<a href={instagram} target="_blank">
					Siguenos en <span>Instagram</span>
				</a>
			</p>
			<div className={styles.backgroundGradient}>
				<Image
					src={landingBackgroundGradient}
					alt="gradient"
					priority
				/>
			</div>
		</section>
	);
}
