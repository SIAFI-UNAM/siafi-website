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
			name: "position",
			title: "Cargo",
			type: "string",
		},
		{
			name: "email",
			title: "Correo Electrónico",
			type: "string",
		},
		{
			name: "username",
			title: "Nombre de usuario",
			description:
				"Nombre de usuario en la red social a compartir (aparece en el landing page) (añadir @)",
			type: "string",
		},
		{
			name: "social_media_link",
			title: "Link de la red social",
			description:
				"Link de la red social a compartir (aparece en el landing page)",
			type: "string",
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
