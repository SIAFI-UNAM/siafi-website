import type { SchemaTypeDefinition } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const BlogSchema: SchemaTypeDefinition = {
	name: "blog",
	title: "Blogs",
	type: "document",
	icon: DocumentTextIcon,
	fields: [
		{
			name: "title",
			title: "Titulo del blog",
			type: "string",
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "slug",
			title: "Ruta (slug)",
			type: "slug",
			options: {
				source: "title",
				maxLength: 96,
			},
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "image",
			title: "Imagen de portada",
			type: "image",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "alt",
					title: "Texto Alternativo",
					type: "string",
				},
			],
		},
		{
			name: "category",
			title: "Categoria",
			type: "reference",
			to: [{ type: "blogCategory" }],
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "publishedAt",
			title: "Publicado el",
			type: "date",
			options: {
				dateFormat: "DD/MM/YYYY",
			},
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "author",
			title: "Autor",
			type: "reference",
			to: [{ type: "author" }],
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "content",
			title: "Contenido",
			type: "array",
			of: [
				{ type: "block" },
				{
					type: "image",
				},
			],
		},
	],
};
