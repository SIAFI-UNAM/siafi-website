"use client";
import type { BlogInfo } from "@/models/Blog";
import React, { useState, useEffect, useCallback } from "react";
import styles from "./BlogList.module.css";
import { getBlogsByPage } from "@/sanity/sanity-utils";
import BlogCard from "../BlogCard";
import { set } from "sanity";

interface BlogListProps {
	blogCategories: Array<{ name: string; id: string }>;
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
			<div className="row">
				{blogs.map((blog) => (
					<div key={blog._id} className="col-12 col-md-4">
						<BlogCard blog={blog} />
					</div>
				))}
			</div>
		</>
	);
};

export default BlogList;
