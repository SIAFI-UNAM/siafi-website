import React from "react";
import styles from "./AboutUsHero.module.css";
import Image from "next/image";

const AboutUsHero = () => {
	return (
		<header className={`${styles.heroContainer} container`}>
			<div className="heroTitle"></div>
			<div className="heroImage">
				<Image
					src="/images/hero/about-us-hero.jpg"
					alt="About us hero image"
					width={1200}
					height={800}
				/>
			</div>
		</header>
	);
};

export default AboutUsHero;
