import React from "react";
import styles from "./BlogCard.module.css";
import Image from "next/image";
import { blogImage1, testAuthor } from "@/image-paths";
import Link from "next/link";
import { Author } from "@/models/Author";
import { BlogInfo } from "@/models/Blog";
import {
	getDescriptionFromPortableText,
	getReadingTimeFromPortableText,
} from "@/lib/portableTextUtils";

type Props = {
	blog: BlogInfo;
};

/**
 * Card for a blog post.
 *
 * TODO: Turn dynamic the color of the card category.
 */
export default function BlogCard({ blog }: Props) {
	const dateFormater = new Intl.DateTimeFormat("es-MX", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});

	return (
		<Link href={`/blog/${blog.slug}`} className={styles.cardLink}>
			<div
				className={`${styles.cardContainer} ${styles["hvr-wobble-horizontal"]}`}
			>
				<Image
					src={blog.image}
					alt={blog.title}
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
							width={48}
							height={48}
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
