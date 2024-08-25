import type { SchemaTypeDefinition } from "sanity";
import { UserIcon } from "@sanity/icons";

export const AuthorSchema: SchemaTypeDefinition = {
	name: "author",
	title: "Autores",
	type: "document",
	icon: UserIcon,
	fields: [
		{
			name: "name",
			title: "Nombre",
			type: "string",
		},
		{
			name: "avatar",
			title: "Foto del autor",
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
			name: "bio",
			title: "Biografia",
			type: "array",
			of: [
				{
					type: "block",
					styles: [{ title: "Normal", value: "normal" }],
					lists: [],
				},
			],
		},
	],
};
