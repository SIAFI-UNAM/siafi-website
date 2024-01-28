"use client";
import React from "react";
import styles from "./SketchCircledText.module.css";
import Image from "next/image";
import { drawedCircle } from "@/image-paths";

type Props = {
	children: React.ReactNode;
};

export default function SketchCircledText({ children }: Props) {
	return (
		<span className={styles.textContainer}>
			{children}
			{/* <Image
				src={drawedCircle}
				alt="Drawed Circle"
				className={styles.circle}
			/> */}
			<svg
				width="100%"
				height="80"
				className={styles.circle}
				fill="none"
				preserveAspectRatio="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<text
					x="50%"
					y="40"
					fill="#000000"
					text-anchor="middle"
					lengthAdjust="spacingAndGlyphs"
					textLength="100%" // Adjust the length as needed
				></text>
				<path
					id="Vector"
					d="M19.502 6.02198C75.5967 -1.78703 192 -3.6048 192 52.243C192 92.4488 9.06764 84.6279 2.64553 46.861C-0.600814 27.7701 4.3312 6.02198 116.146 6.022"
					stroke="#FA504D"
					strokeWidth="2"
				/>
			</svg>
		</span>
	);
}
