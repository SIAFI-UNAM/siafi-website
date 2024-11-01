import React from "react";
import styles from "./BlogCardList.module.css";
import Image from "next/image";
import Link from "next/link";
import { BlogInfo } from "@/models/Blog";
import {
	getDescriptionFromPortableText,
	getReadingTimeFromPortableText,
} from "@/lib/portableTextUtils";

type Props = {
	/**
	 * The blog post to display.
	 */
	blog: BlogInfo;
};

/**
 * Card for a blog post.
 * @param props - The props of the component.
 */
export default function BlogCardList({ blog }: Props) {
	const dateFormater = new Intl.DateTimeFormat("es-MX", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<Link href={`/blog/${blog.slug}`} className={styles.cardLink}>
			<div className={`${styles.cardContainer}`}>
				<Image
					src={blog.image.url}
					alt={blog.image.alt}
					className={styles.cardImage}
					width={250}
					height={250}
				/>
				<div className={styles.cardContent}>
					<h4>{blog.category}</h4>
					<h2>{blog.title}</h2>
					<p>{getDescriptionFromPortableText(blog.content)}</p>
					<div className={styles.cardAuthor}>
						<Image
							src={blog.author.avatar}
							alt={`${blog.author.name} photo`}
							width={40}
							height={40}
							loading="lazy"
						/>
						<div className={styles.authorInfo}>
							<h4>{blog.author.name}</h4>
							<p>{`${dateFormater.format(
								new Date(blog.publishedAt)
							)} · ${getReadingTimeFromPortableText(
								blog.content
							)} min lectura`}</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
