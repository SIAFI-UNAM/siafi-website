import React from "react";
import { arrowRightUpIcon } from "@/image-paths";
import Image from "next/image";
import Link from "next/link";
import styles from "./CTAButton.module.css";

type Props = {
	text: string;
	link: string;
	external?: boolean;
};

export default function CTAButton({ text, link, external = false }: Props) {
	const buttonIcon = <Image src={arrowRightUpIcon} alt="Arrow Right Up" />;

	{
		return external ? (
			<a className={styles.button} href={link} target="_blank">
				<span>{text}</span> {buttonIcon}{" "}
			</a>
		) : (
			<Link className={styles.button} href={link}>
				<span>{text}</span> {buttonIcon}
			</Link>
		);
	}
}
