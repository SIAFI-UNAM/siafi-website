import React from "react";
import styles from "./PageSection.module.css";

type Props = {
	title?: string;
	subtitle?: string;
	description?: string;
	id?: string;
	children?: React.ReactNode;
};

export default function PageSection({
	title,
	subtitle,
	description,
	id = "",
	children,
}: Props) {
	return (
		<section id={id} className="container">
			<div className={styles.header}>
				<h4>{subtitle}</h4>
				<h2>{title}</h2>
				<p>{description}</p>
			</div>
			<div className={styles.content}>{children}</div>
		</section>
	);
}
