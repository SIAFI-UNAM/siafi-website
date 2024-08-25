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

export default function Hero() {
	// Strings demo (change every 3 seconds) (TEMPORAL, then we will update them via sanity)
	// Words that can fit between "Inteligencia Artificial" and "Por estudiantes"

	const [index, setIndex] = useState(0);

	const DEMO_TEXTS = [
		"Super Cargada",
		"Creada",
		"Reimaginada",
		"Desarrollada",
	];

	useEffect(() => {
		const intervalId = setInterval(
			() => setIndex((index) => (index + 1) % DEMO_TEXTS.length),
			5000 // every 3 seconds
		);
		return () => clearTimeout(intervalId);
	}, [DEMO_TEXTS.length]);

	return (
		<section className={`${styles.heroContainer}`}>
			{/* Title and hero main images */}
			<div className="container">
				<div className="row">
					<div className={`col-12 col-md-6 ${styles.heroTexts}`}>
						<p className={styles.heroTitle}>
							Inteligencia Artificial
						</p>
						<TextTransition
							springConfig={presets.wobbly}
							className={styles.heroActiveWord}
						>
							{DEMO_TEXTS[index]}
						</TextTransition>
						{/* <p className={styles.heroActiveWord}>Super Cargada</p> */}
						<p className={styles.heroTitle}>Por estudiantes</p>
						<div className={styles.weLoveAIHero}>
							<p>WE</p>
							<Image src={heartDrawingIcon} alt="Heart icon" />
							<p>AI</p>
						</div>
						<div className={styles.arrow}>
							<Image src={arrowHero} alt="Arrow hero" />
						</div>
						<div className={styles.robotDrawing}>
							<Image src={robotDrawing} alt="Robot hero" />
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
							/>
						</div>
						<Image
							src={siafiStudentsHero}
							className={styles.siafiStudents}
							alt="SIAFI students"
						/>
					</div>
				</div>
			</div>
			{/* Absolute posisioned elements on hero */}
			<p className={styles.igFollowUS}>
				<a href="https://www.instagram.com/unam.siafi/" target="_blank">
					Siguenos en <span>Instagram</span>
				</a>
			</p>
			<div className={styles.backgroundGradient}>
				<Image src={landingBackgroundGradient} alt="gradient" />
			</div>
		</section>
	);
}
