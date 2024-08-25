import type { SchemaTypeDefinition } from "sanity";
import { CreditCardIcon } from "@sanity/icons";

export const PartnerSchema: SchemaTypeDefinition = {
	name: "partner",
	title: "Patrocinadores",
	type: "document",
	icon: CreditCardIcon,
	fields: [
		{
			name: "partner_name",
			title: "Nombre",
			type: "string",
		},
		{
			name: "partner_logo",
			title: "Logo del patrocinador",
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
			name: "description",
			title: "Biografia",
			type: "text",
		},
	],
};
