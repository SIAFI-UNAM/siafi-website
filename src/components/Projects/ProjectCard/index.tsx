import React from "react";
import styles from "./ProjectCard.module.css";
import Image from "next/image";
import Link from "next/link";

type Props = {
	linkTo: string;
	title?: string;
	variant?: "primary" | "secondary" | "blank";
	size?: "sm" | "lg";
	projectImage?: {
		alt: string;
		url: string;
	};
};

/**
 * ProjectCard component to display a project with a title and an image.
 * @param {Props} props - The props of the component.
 * @returns {JSX.Element} ProjectCard component.
 */
export default function ProjectCard({
	title = "",
	linkTo,
	variant = "primary",
	projectImage,
	size = "sm",
}: Props) {
	return (
		<Link href={linkTo}>
			<div className={`${styles.cardContainer} ${styles[size]}`}>
				<h3 className={`${styles.cardTitle} ${styles[variant]}`}>
					{title}
				</h3>
				{variant !== "blank" && <div className={styles.cardOverlay} />}
				{projectImage && (
					<Image
						fill
						src={projectImage.url}
						alt={projectImage.alt}
						className={styles.cardImage}
						loading="lazy"
					/>
				)}
			</div>
		</Link>
	);
}
