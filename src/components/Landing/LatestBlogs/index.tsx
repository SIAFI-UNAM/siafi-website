import BlogCard from "@/components/Blog/BlogCard";
import PageSection from "@/components/General/PageSection";
import { blogImage1, testAuthor } from "@/image-paths";
import React from "react";

export default function LatestBlogs() {
	return (
		<PageSection
			title="Publicaciones recientes"
			subtitle="Visita nuestro blog"
			description="Nuestros miembros publican frecuentemente posts interesantes sobre la Inteligencia Artificial"
		>
			<div className="row">
				<div className="col-12 col-md-4">
					<BlogCard
						title="La IA en Apple"
						category="Prueba"
						description="Esta es una prueba de las publicaciones de los blogs"
						image={blogImage1.src}
						link="/blog/la-ia-en-apple"
						publishedAt="28 ene 2024"
						author={{
							name: "Test Author",
							image: testAuthor.src,
							id: 1,
						}}
					/>
				</div>{" "}
				<div className="col-12 col-md-4">
					<BlogCard
						title="La IA en Apple"
						category="Prueba"
						description="Esta es una prueba de las publicaciones de los blogs"
						image={blogImage1.src}
						link="/blog/la-ia-en-apple"
						publishedAt="28 ene 2024"
						author={{
							name: "Test Author",
							image: testAuthor.src,
							id: 1,
						}}
					/>
				</div>{" "}
				<div className="col-12 col-md-4">
					<BlogCard
						title="La IA en Apple"
						category="Prueba"
						description="Esta es una prueba de las publicaciones de los blogs"
						image={blogImage1.src}
						link="/blog/la-ia-en-apple"
						publishedAt="28 ene 2024"
						author={{
							name: "Test Author",
							image: testAuthor.src,
							id: 1,
						}}
					/>
				</div>
			</div>
		</PageSection>
	);
}
