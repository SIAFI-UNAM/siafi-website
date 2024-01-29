import React from "react";
import styles from "./Sponsors.module.css";
import Image from "next/image";
import { demoSponsor } from "@/image-paths";

export default function Sponsors() {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h2>Ellos confían en nosotros</h2>
			</div>
			<div className={styles.sponsors}>
				<Image src={demoSponsor} alt="Demo Sponsor" />
				<Image src={demoSponsor} alt="Demo Sponsor" />
				<Image src={demoSponsor} alt="Demo Sponsor" />
				<Image src={demoSponsor} alt="Demo Sponsor" />
				<Image src={demoSponsor} alt="Demo Sponsor" />
			</div>
		</div>
	);
}
