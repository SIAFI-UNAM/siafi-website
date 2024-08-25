import type { FieldDefinition, SchemaTypeDefinition } from "sanity";
import { HomeIcon } from "@sanity/icons";

const HeroSection: FieldDefinition = {
	name: "hero",
	title: "Hero",
	type: "object",
	description:
		'El "Hero" es la primera sección de la home page, contiene el título de la página, así como algunas imágenes. Nota: El título de la página esta dividido en 2, el titulo superior aparece arriba de las palabras que cambian, y el título inferior aparece abajo de las palabras de cambian.',
	fields: [
		{
			name: "up_title",
			title: "Título superior",
			type: "string",
		},
		{
			name: "changing_words",
			title: "Palabras dínamicas",
			type: "array",
			description:
				"Las palabras que se muestran dinámicamente en el título, haciendo juego con los títulos. Ejemplo: IA ['Creada', 'Super-cargada', 'Re-inventada'] por estudiantes.",
			of: [{ type: "string" }],
		},
		{
			name: "down_title",
			title: "Título inferior",
			type: "string",
		},
		{
			name: "siafi_group_image",
			title: "Imagen grupal de SIAFI",
			type: "image",
		},
	],
};

const AboutUsSection: FieldDefinition = {
	name: "about_us",
	title: "Sobre Nosotros",
	type: "object",
	description:
		"La sección de 'Sobre Nosotros' contiene una breve descripción de la organización, así como una imagen de la organización.",
	fields: [
		{
			name: "aboutus_title",
			title: "Título",
			type: "string",
		},
		{
			name: "aboutus_subtitle",
			title: "Subtítulo",
			type: "string",
		},
		{
			name: "aboutus_description",
			title: "Descripción",
			type: "text",
		},
		{
			name: "aboutus_image",
			title: "Imagen",
			type: "image",
		},
		{
			name: "aboutus_cta",
			title: "Titulo de llamado a la acción (botón)",
			type: "string",
		},
		{
			name: "aboutus_cta_link",
			title: "Link de llamado a la acción (botón)",
			type: "string",
		},
	],
};

const ContactSection: FieldDefinition = {
	name: "contact",
	title: "Contacto",
	type: "object",
	description:
		"La sección de 'Contacto' contiene la información de contacto de la organización. Nota: En esta sección solo se modifican los textos de la sección en la homepage, la información como el correo de contacto y/o dirección se modifica en 'Contacto y otros'.",
	fields: [
		{
			name: "contact_title",
			title: "Título",
			type: "string",
		},
		{
			name: "contact_subtitle",
			title: "Subtítulo",
			type: "string",
		},
	],
};

export const landingPageSchema: SchemaTypeDefinition = {
	name: "landingPage",
	title: "Página de inicio (Landing)",
	type: "document",
	icon: HomeIcon,
	fields: [HeroSection, AboutUsSection, ContactSection],
};
