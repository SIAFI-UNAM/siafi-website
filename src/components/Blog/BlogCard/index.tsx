import React from "react";
import styles from "./BlogCard.module.css";
import Image from "next/image";
import { blogImage1, testAuthor } from "@/image-paths";
import Link from "next/link";
import { Author } from "@/models/Author";

type Props = {
	title: string;
	description: string;
	category: string;
	image: string;
	link: string;
	author: Author;
	publishedAt: string;
};

/**
 * Card for a blog post.
 *
 * TODO: Turn dynamic the color of the card category.
 */
export default function BlogCard({
	title,
	description,
	category,
	image,
	link,
	author,
	publishedAt,
}: Props) {
	return (
		<Link href={link} className={styles.cardLink}>
			<div className={styles.cardContainer}>
				<Image
					src={image}
					alt={title}
					className={styles.cardImage}
					width={250}
					height={250}
				/>
				<div className={styles.cardContent}>
					<h4>{category}</h4>
					<h2>{title}</h2>
					<p>{description}</p>
					<div className={styles.cardAuthor}>
						<Image
							src={author.image}
							alt={`${author.name} photo`}
							width={48}
							height={48}
						/>
						<div className={styles.authorInfo}>
							<h4>{author.name}</h4>
							<p>{`${publishedAt} · X min lectura`}</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
