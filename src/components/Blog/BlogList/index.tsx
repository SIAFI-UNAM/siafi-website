"use client";
import type { BlogInfo } from "@/models/Blog";
import React, { useState, useEffect, useCallback } from "react";
import styles from "./BlogList.module.css";
import { getBlogsByPage } from "@/sanity/sanity-utils";
import BlogCardList from "../BlogCardList";

interface BlogListProps {
	blogCategories: Array<{ name: string; id: string }>;
	totalBlogs: number;
}

/**
 * Component for displaying a list of blog posts.
 * @param props - The props of the component.
 * @returns The blog list component.
 */
const BlogList = ({ blogCategories }: BlogListProps) => {
	const blogCatgs = [{ name: "Todo", id: "Todo" }, ...blogCategories];
	const [blogs, setBlogs] = useState<BlogInfo[]>([]);
	const [selectedCategory, setSelectedCategory] = useState<string>(
		blogCatgs[0].id
	);
	const [page, setPage] = useState<number>(1);
	const totalPages = Math.ceil(blogCategories.length / 8);

	const handleCategoryChange = (category: string) => {
		setPage(1);
		setSelectedCategory(category);
	};

	useEffect(() => {
		const getBlogs = async () => {
			try {
				const newblogs = await getBlogsByPage(
					page,
					selectedCategory !== "Todo" ? selectedCategory : undefined
				);

				setBlogs(newblogs);
			} catch (e) {
				console.log(e);
			}
		};
		getBlogs();
	}, [selectedCategory, page]);

	return (
		<>
			<div className={styles.blogCategoriesContainer}>
				{blogCatgs.map((category) => (
					<button
						key={category.id}
						className={styles.blogCategoryButton}
						disabled={category.id === selectedCategory}
						onClick={() => handleCategoryChange(category.id)}
					>
						{category.name}
					</button>
				))}
			</div>
			<div className="row mt-3 mb-3 px-3 px-md-0">
				{blogs.map((blog) => (
					<div
						key={blog._id}
						className="col-12 col-md-6 col-lg-4 col-xl-3"
					>
						<BlogCardList blog={blog} />
					</div>
				))}
			</div>

			<div className={styles.actionsContainer}>
				{page > 1 && (
					<button
						className={styles.viewMoreButton}
						onClick={() => setPage(page - 1)}
					>
						{"< Anterior página"}
					</button>
				)}
				{page < totalPages && (
					<button
						className={styles.viewMoreButton}
						onClick={() => setPage(page + 1)}
					>
						{"Siguiente página >"}
					</button>
				)}
			</div>
		</>
	);
};

export default BlogList;
