import type { FieldDefinition, SchemaTypeDefinition } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

const BlogsPageSection: FieldDefinition = {
	name: "blogs_page_section",
	title: "Listado de blogs",
	type: "object",
	description:
		"La página de listado de blogs muestra todos los blogs que hay disponibles para cada categoría.",
	fields: [
		{
			name: "title",
			title: "Título",
			type: "string",
		},
		{
			name: "description",
			title: "Descripción",
			type: "array",
			of: [{ type: "block" }],
		},
	],
};

const ProjectsPageSection: FieldDefinition = {
	name: "projects_page_section",
	title: "Listado de proyectos",
	type: "object",
	description:
		"La página de listado de blogs muestra todos los proyectos que ha realizado SIAFI.",
	fields: [
		{
			name: "title",
			title: "Título",
			type: "string",
		},
		{
			name: "description",
			title: "Descripción",
			type: "array",
			of: [{ type: "block" }],
		},
	],
};

export const BlogProjectsListsPagesSchema: SchemaTypeDefinition = {
	name: "blog_projects_lists_pages",
	title: "Páginas de listado de blogs y proyectos",
	type: "document",
	icon: DocumentTextIcon,
	fields: [BlogsPageSection, ProjectsPageSection],
};
