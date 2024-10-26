import BlogList from "@/components/Blog/BlogList";
import SimplePage from "@/components/General/SimplePage";
import {
	getBlogCategories,
	getBlogListPageInfo,
	getTotalBlogs,
} from "@/sanity/sanity-utils";
import React from "react";

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
