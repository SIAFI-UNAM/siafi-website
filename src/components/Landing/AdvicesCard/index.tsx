"use client";
import { Advice } from "@/models/Advice";
import React, { useEffect, useState } from "react";
import styles from "./AdvicesCard.module.css";
import Image from "next/image";
import { advice1 } from "@/image-paths";

type Props = {
	advices: [Advice];
};

/***
 * Card to show latest advices or important anounces.
 *
 * TODO: Convert this component into a carousel & to a bar upper or down the navbar.
 */
export default function AdvicesCard({ advices }: Props) {
	const [activeAdvice, setActiveAdvice] = useState(0);

	return (
		<div className={styles.advicesCardContainer}>
			<div className="row">
				<div className="col-6">
					<Image
						className={styles.adviceImage}
						src={advice1}
						alt={`${advices[0].title} image`}
					/>
				</div>
				<div className={`col ${styles.adviceDescription}`}>
					<h3>{advices[0].title}</h3>
					<p>{advices[0].description}</p>
				</div>
			</div>
		</div>
	);
}
