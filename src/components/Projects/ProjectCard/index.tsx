import React from "react";
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import Link from "next/link";

type Props = {
	linkTo: string;
	children: React.ReactNode;
};

export default function ProjectCard({ linkTo, children }: Props) {
	return (
		<Link href={linkTo}>
			<div className={styles.cardContainer}>{children}</div>
		</Link>
	);
}
