import type { FieldDefinition, SchemaTypeDefinition } from "sanity";
import { BookIcon } from "@sanity/icons";

const HeroSection: FieldDefinition = {
	name: "hero",
	title: "Hero (Portada)",
	type: "object",
	description:
		'El "Hero" es la primera sección de la página page, contiene el título de la página, las redes sociales de siafi (estas se editan en la configuración de contacto) y un espacio para una imagen.',
	fields: [
		{
			name: "title",
			title: "Título",
			type: "string",
		},
		{
			name: "subtitle",
			title: "Subtítulo",
			type: "string",
		},
		{
			name: "image",
			title: "Imagen",
			type: "image",
			fields: [
				{
					name: "alt",
					title: "Descripción de la imagen",
					type: "string",
				},
			],
		},
	],
};

const IdentitySection: FieldDefinition = {
	name: "identity",
	title: "Identidad",
	type: "object",
	description:
		"La sección de 'Identidad' contiene la misión, visión y valores de SIAFI.",
	fields: [
		{
			name: "title",
			title: "Título",
			type: "string",
		},
		{
			name: "mision",
			title: "Misíon",
			type: "array",
			of: [{ type: "block" }],
		},
		{
			name: "vision",
			title: "Visión",
			type: "array",
			of: [{ type: "block" }],
		},
		{
			name: "values",
			title: "Valores",
			type: "array",
			of: [{ type: "block" }],
		},
	],
};

export const siafiCoresSection: FieldDefinition = {
	name: "siafi_cores",
	title: "Núcleos de SIAFI",
	type: "object",
	description:
		"En esta sección, se hablan de los nucleos de SIAFI, con una imagen y una breve descripción del nucleo.",
	fields: [
		{
			name: "title",
			title: "Título",
			type: "string",
		},
		{
			name: "subtitle",
			title: "Subtítulo",
			type: "string",
		},
		{
			name: "description",
			title: "Descripción",
			type: "text",
		},
		{
			name: "cores",
			title: "Núcleos",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						{
							name: "name",
							title: "Nombre del núcleo",
							type: "string",
						},
						{
							name: "description",
							title: "Descripción",
							type: "text",
						},
						{
							name: "image",
							title: "Imagen",
							type: "image",
							fields: [
								{
									name: "alt",
									title: "Texto Alternativo",
									type: "string",
								},
							],
						},
					],
				},
			],
		},
	],
};

/**
 * About us schema definition for About Us page.
 */
export const aboutUsSchema: SchemaTypeDefinition = {
	name: "about_us",
	title: "Página: Nosotros",
	type: "document",
	icon: BookIcon,
	fields: [HeroSection, IdentitySection, siafiCoresSection],
};
