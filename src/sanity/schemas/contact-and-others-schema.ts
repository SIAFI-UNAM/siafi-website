import type { FieldDefinition, SchemaTypeDefinition } from "sanity";
import { CogIcon } from "@sanity/icons";

const ContactSection: FieldDefinition = {
	name: "contact",
	title: "Contacto",
	type: "object",
	description:
		"En esta sección se modifica la información de contacto de la organización, la cual se muestra en diversas partes del sitio.",
	fields: [
		{
			name: "email",
			title: "Email",
			type: "string",
		},
		{
			name: "phone",
			title: "Teléfono",
			type: "string",
		},
		{
			name: "address",
			title: "Dirección",
			type: "text",
		},
	],
};

const SocialMediaSection: FieldDefinition = {
	name: "social_media",
	title: "Redes sociales",
	type: "object",
	description:
		"En esta sección se modifican las redes sociales de la organización.",
	fields: [
		{
			name: "facebook",
			title: "Facebook",
			type: "string",
		},
		{
			name: "instagram",
			title: "Instagram",
			type: "string",
		},
		{
			name: "linkedin",
			title: "LinkedIn",
			type: "string",
		},
		{
			name: "youtube",
			title: "YouTube",
			type: "string",
		},
		{
			name: "tiktok",
			title: "TikTok",
			type: "string",
		},
		{
			name: "twitter",
			title: "Twitter",
			type: "string",
		},
		{
			name: "github",
			title: "GitHub",
			type: "string",
		},
	],
};

const MetaDataSection: FieldDefinition = {
	name: "metadata",
	title: "Metadatos",
	type: "object",
	description:
		"En esta sección se modifican los metadatos del sitio, como el título, descripción y la imagen que se muestra en las redes sociales.",
	fields: [
		{
			name: "title",
			title: "Título de la página",
			type: "string",
		},
		{
			name: "description",
			title: "Descripción de la página",
			type: "text",
		},
	],
};

export const ContactAndOthersSchema: SchemaTypeDefinition = {
	name: "contact_and_others",
	title: "Contacto y otros",
	type: "document",
	icon: CogIcon,
	description:
		"En esta sección se modifica la información de contacto, redes sociales de la organización y otras configuraciones del sitio.",
	fields: [ContactSection, SocialMediaSection, MetaDataSection],
};
