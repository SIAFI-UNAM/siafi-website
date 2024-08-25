import type { SchemaTypeDefinition } from "sanity";
import { ArrowUpIcon } from "@sanity/icons";

export const BlogCategorySchema: SchemaTypeDefinition = {
	name: "blogCategory",
	title: "Categorias de Blog",
	type: "document",
	icon: ArrowUpIcon,
	fields: [
		{
			name: "name",
			title: "Nombre",
			type: "string",
		},
	],
};
