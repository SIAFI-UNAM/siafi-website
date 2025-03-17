import DetailPage from "@/components/General/DetailPage";
import React from "react";
import { PortableText } from "@portabletext/react";
import { getBlogBySlug, getBlogs } from "@/sanity/sanity-utils";
import PageSection from "@/components/General/PageSection";
import Image from "next/image";
import { heartbreakDoodle, siafiBallSad } from "@/image-paths";
import styles from "./BlogDetail.module.css";
import CTAButton from "@/components/General/CTAButton";
import {
	getReadingTimeFromPortableText,
	portableTextToPlainText,
} from "@/lib/portableTextUtils";
import PortableTextCustomComponents from "@/components/Sanity/PortableTextCustomComponents";

interface BlogDetailParams {
	params: {
		slug: string;
	};
}

export async function generateStaticParams() {
	const allBlogs = await getBlogs();

	return allBlogs.map((blog) => ({
		slug: blog.slug,
	}));
}

export async function generateMetadata({ params }: BlogDetailParams) {
	const { slug } = params;
	const blogInfo = await getBlogBySlug(slug);
	const blogDescription = blogInfo
		? portableTextToPlainText(blogInfo.content).slice(0, 256)
		: "Blog no encontrado";
	const blogTitle = blogInfo?.title || "Blog no encontrado";
	return {
		title: blogTitle,
		description: blogDescription,
		openGraph: {
			title: blogTitle,
			description: blogDescription,
			images: [
				{
					url: blogInfo?.image.url,
					width: 800,
					height: 600,
					alt: blogInfo?.image.alt,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: blogTitle,
			description: blogDescription,
			images: [blogInfo?.image.url],
			site: "@siafi_unam",
		},
	};
}

/**
 * This page shows the details of a blog post.
 * @param props - The props of the component.
 * @returns The blog detail page.
 */
const BlogDetail = async ({ params }: BlogDetailParams) => {
	const { slug } = params;
	const blogInfo = await getBlogBySlug(slug);

	if (!blogInfo) {
		return (
			<PageSection>
				<Image src={siafiBallSad} alt="404" width={150} />
				<div className={styles.notFoundTitleContainer}>
					<h1 className={styles.notFoundTitle}>
						Error 404 - Blog no encontrado
					</h1>
					<Image
						src={heartbreakDoodle}
						alt="heartbreak icon"
						width={75}
					/>
				</div>
				<p className={styles.notFoundDescription}>
					Ups! Parece que el blog que buscas no existe o fue
					eliminado. Por favor, verifica la URL o regresa al listado
					de blogs.
				</p>
				<CTAButton link="/blog" text="Regresar al listado de blogs" />
			</PageSection>
		);
	}

	return (
		<DetailPage
			title={blogInfo.title}
			author={blogInfo.author}
			category={blogInfo.category}
			coverImage={blogInfo.image}
			publicationDate={blogInfo.publishedAt}
			readingTime={getReadingTimeFromPortableText(blogInfo.content)}
		>
			<PortableText
				value={blogInfo.content}
				components={PortableTextCustomComponents}
			/>
		</DetailPage>
	);
};

export default BlogDetail;
