import BlogList from "@/components/Blog/BlogList";
import SimplePage from "@/components/General/SimplePage";
import { getBlogCategories } from "@/sanity/sanity-utils";
import React from "react";

const BlogListPage = async () => {
	const blogCategories = await getBlogCategories();

	return (
		<SimplePage
			title="Blog"
			description="Nuestros miembros publican frecuentemente posts interesantes sobre la Inteligencia Artificial"
		>
			<BlogList blogCategories={blogCategories} />
		</SimplePage>
	);
};

export default BlogListPage;
