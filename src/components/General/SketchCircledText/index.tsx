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
			<Image
				src={drawedCircle}
				alt="Drawed Circle"
				className={styles.circle}
			/>
		</span>
	);
}
