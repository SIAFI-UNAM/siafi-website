import BlogCardLanding from "@/components/Blog/BlogCardLanding";
import PageSection from "@/components/General/PageSection";
import { blogImage1, testAuthor } from "@/image-paths";
import type { BlogInfo } from "@/models/Blog";
import React from "react";

type LatestBlogsProps = {
	blogs: BlogInfo[];
};

export default function LatestBlogs({ blogs }: LatestBlogsProps) {
	return (
		<PageSection
			title="Publicaciones recientes"
			subtitle="Visita nuestro blog"
			description="Nuestros miembros publican frecuentemente posts interesantes sobre la Inteligencia Artificial"
		>
			<div className="row">
				{blogs.map((blog) => (
					<div
						key={blog._id}
						className="col-12 col-md-6 col-lg-4 mt-4 px-md-0 px-lg-3 px-5"
					>
						<BlogCardLanding blog={blog} />
					</div>
				))}
				<div className="col d-none d-md-block d-lg-none"></div>
			</div>
		</PageSection>
	);
}
