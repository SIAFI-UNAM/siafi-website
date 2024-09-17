import React from "react";
import styles from "./Sponsors.module.css";
import Image from "next/image";
import type { SponsorInfo } from "@/models/Sponsor";

type Props = {
	sponsors: SponsorInfo[];
};

/**
 * This component displays the sponsors of SIAFI on the landing page.
 * @param {Props} props - The props of the component.
 * @returns {JSX.Element} Sponsors component.
 */
export default function Sponsors({ sponsors }: Props) {
	return (
		<div className={styles.container}>
			<div className={styles.title}>
				<h2>Ellos confían en nosotros</h2>
			</div>
			<div className={styles.sponsors}>
				{sponsors.map((spon) => (
					<Image
						key={spon.name}
						width={200}
						height={100}
						src={spon.image.url}
						alt={spon.image.alt}
					/>
				))}
			</div>
		</div>
	);
}
