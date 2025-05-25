import React from "react";
import styles from "./DetailPage.module.css";
import { Author } from "@/models/Author";
import Image from "next/image";

interface SimplePageProps {
	/**
	 * The title of the page.
	 */
	title?: string;
	/**
	 * The url of the cover image of the blog or page.
	 */
	coverImage?: { url: string; alt: string };
	/**
	 * The category of the blog or page.
	 */
	category?: string;
	/**
	 * The children elements of the page.
	 */
	/**
	 * The author of the blog or page.
	 */
	author?: Author;
	/**
	 * The publication date of the blog or page.
	 */
	publicationDate?: string;
	/**
	 * The reading time of the blog or page.
	 */
	readingTime?: number;
	/**
	 * The variant of the detail page. Default value is "blog".
	 */
	variant?: "blog" | "project";
	/**
	 * The authors of the blog or page. Only visible in "project" variant.
	 */
	authors?: string[];
	children?: React.ReactNode;
}

/**
 * Component for creating simple detail pages for blogs or other use cases with an style aligned layout.
 * @param props - The props of the component.
 * @returns The detail page component.
 */
const DetailPage = ({
	title,
	coverImage,
	category,
	author,
	publicationDate,
	readingTime,
	variant = "blog",
	authors,
	children,
}: SimplePageProps) => {
	const dateFormater = new Intl.DateTimeFormat("es-MX", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<main className={`container ${styles.pageContainer}`}>
			<header className={`${styles.header} row`}>
				{coverImage && (
					<div className="col-12 col-md-6 ">
						<Image
							src={coverImage.url}
							alt={coverImage.alt}
							width={600}
							height={400}
							className={styles.coverImage}
						/>
					</div>
				)}
				<div className={`${styles.detailInfo} col mt-3 mt-md-0`}>
					{category && (
						<h2 className={styles.pageCategory}>{category}</h2>
					)}
					{title && <h1 className={styles.pageTitle}>{title}</h1>}
					{variant === "blog" && author && (
						<div className="mt-3 d-flex flex-column gap-3">
							<p className={styles.authorPresentation}>
								Escrito por:
							</p>
							<div className={styles.authorInfo}>
								<Image
									src={author.avatar}
									alt={`${author.name} photo`}
									width={60}
									height={60}
								/>
								<div className={styles.authorName}>
									<h3>{author.name}</h3>
								</div>
							</div>
							<p className={styles.pageInformation}>{`${
								publicationDate
									? dateFormater.format(
											new Date(publicationDate),
										)
									: ""
							} · ${readingTime} min lectura`}</p>
						</div>
					)}
					{variant === "project" && (
						<>
							{authors && (
								<div className={styles.authors}>
									<h4>Autores:</h4>
									<ul>
										{authors.map((author) => (
											<li key={author}>{author}</li>
										))}
									</ul>
								</div>
							)}
							{publicationDate && (
								<div className={styles.lastUpdate}>
									{/* <h3>{author.name}</h3> */}
									<p>{`Ultima actualización: ${
										publicationDate
											? dateFormater.format(
													new Date(publicationDate),
												)
											: ""
									} · ${readingTime} min lectura`}</p>
								</div>
							)}
						</>
					)}
				</div>
			</header>
			<div className={`${styles.pageBody} mt-3 mb-3`}>{children}</div>
		</main>
	);
};

export default DetailPage;
