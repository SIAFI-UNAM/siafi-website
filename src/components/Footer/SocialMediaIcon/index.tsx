import React from "react";
import styles from "./SocialMediaIcon.module.css";
import Image from "next/image";

type Props = {
	icon: string;
	link: string;
	isPureIcon?: boolean;
};

export default function SocialMediaIcon({
	icon,
	link,
	isPureIcon = false,
}: Props) {
	return (
		<a href={link} target="_blank">
			<div
				className={`${styles.iconContainer} ${
					isPureIcon ? styles.isPureIcon : ""
				}`}
			>
				<Image src={icon} alt="social media icon" />
			</div>
		</a>
	);
}
