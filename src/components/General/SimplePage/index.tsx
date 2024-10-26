import type { PortableTextBlock } from "sanity";
import React from "react";
import styles from "./SimplePage.module.css";
import { PortableText } from "@portabletext/react";

interface SimplePageProps {
	/**
	 * The title of the page.
	 */
	title?: string;
	/**
	 * The description of the page.
	 */
	description?: string | PortableTextBlock[];
	/**
	 * The children elements of the page.
	 */
	children?: React.ReactNode;
}

/**
 * Component for creating simple pages quickly having an style aligned layout.
 * @param props - The props of the component.
 * @returns The simple page component.
 */
const SimplePage = ({
	title = "",
	description = "",
	children,
}: SimplePageProps) => {
	return (
		<main className={`container ${styles.pageContainer}`}>
			<header className={styles.header}>
				{title && <h1 className={styles.pageTitle}>{title}</h1>}
				{description &&
					(typeof description === "string" ? (
						<p className={styles.pageDescription}>{description}</p>
					) : (
						<PortableText value={description} />
					))}
			</header>
			<div className={styles.content}>{children}</div>
		</main>
	);
};

export default SimplePage;
