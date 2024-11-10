import type { Metadata } from "next";
import React from "react";
import BlogList from "@/components/Blog/BlogList";
import SimplePage from "@/components/General/SimplePage";
import {
	getBlogCategories,
	getBlogListPageInfo,
	getTotalBlogs,
} from "@/sanity/sanity-utils";

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Bienvenido al blog de SIAFI, aquí encontrarás artículos sobre Inteligencia Artificial, Machine Learning, Deep Learning y más.",
};

export const revalidate = 60;

/**
 * This page shows a list of blog posts.
 * @returns The BlogListPage component.
 */
const BlogListPage = async () => {
	const blogCategories = await getBlogCategories();
	const blogListPageInfo = await getBlogListPageInfo();
	const totalBlogs = await getTotalBlogs();

	return (
		<SimplePage
			title={blogListPageInfo.title}
			description={blogListPageInfo.description}
		>
			<BlogList blogCategories={blogCategories} totalBlogs={totalBlogs} />
		</SimplePage>
	);
};

export default BlogListPage;
