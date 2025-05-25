import React from "react";
import styles from "./SocialMediaIcon.module.css";
import Image from "next/image";

type Props = {
	/**
	 * The icon url of the social media.
	 */
	icon: string;
	/**
	 * The link of the social media
	 */
	link: string;
	/**
	 * The variant of the social media icon.
	 * @default "transparent"
	 */
	variant?: "transparent" | "light";
};

/**
 * Social media icon component to display social media icons with a link.
 * @param props - The props of the component.
 * @returns The social media icon component.
 */
export default function SocialMediaIcon({
	icon,
	link,
	variant = "transparent",
}: Props) {
	return (
		<a href={link} target="_blank">
			<div className={`${styles.iconContainer} ${styles[variant]}`}>
				<Image src={icon} alt="social media icon" />
			</div>
		</a>
	);
}
