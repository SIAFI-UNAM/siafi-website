import type { SchemaTypeDefinition } from "sanity";
import { FolderIcon } from "@sanity/icons";

/**
 * The schema definition for projects.
 */
export const ProjectSchema: SchemaTypeDefinition = {
	name: "project",
	title: "Proyectos",
	type: "document",
	icon: FolderIcon,
	fields: [
		{
			name: "title",
			title: "Nombre del proyecto",
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
			name: "lastUpdate",
			title: "Ultima actualización",
			type: "date",
			options: {
				dateFormat: "DD/MM/YYYY",
			},
			validation: (Rule: any) => Rule.required(),
		},
		{
			name: "authors",
			title: "Autores",
			type: "array",
			of: [
				{
					type: "string",
				},
			],
		},
		{
			name: "content",
			title: "Descripción del proyecto",
			type: "array",
			of: [
				{ type: "block" },
				{
					type: "image",
				},
				{
					type: "code",
				},
			],
		},
	],
};
