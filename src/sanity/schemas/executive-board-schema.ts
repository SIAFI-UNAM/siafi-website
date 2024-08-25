import type { SchemaTypeDefinition } from "sanity";
import { DiamondIcon } from "@sanity/icons";

export const ExecutiveSchema: SchemaTypeDefinition = {
	name: "executive_board",
	title: "Mesa Directiva",
	type: "document",
	icon: DiamondIcon,
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
