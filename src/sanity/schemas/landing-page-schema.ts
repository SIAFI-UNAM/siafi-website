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
			type: "array",
			of: [{ type: "block" }],
		},
		{
			name: "image",
			title: "Imagen",
			type: "image",
		},
		{
			name: "cta",
			title: "Titulo de llamado a la acción (botón)",
			type: "string",
		},
		{
			name: "cta_link",
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
			name: "title",
			title: "Título",
			type: "string",
		},
		{
			name: "subtitle",
			title: "Subtítulo",
			type: "string",
		},
	],
};

const ProjectsSection: FieldDefinition = {
	name: "projects_section",
	title: "Proyectos",
	type: "object",
	description:
		"La sección de 'Proyectos' contiene una lista de los proyectos de la organización.",
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

export const landingPageSchema: SchemaTypeDefinition = {
	name: "landingPage",
	title: "Página de inicio (Landing)",
	type: "document",
	icon: HomeIcon,
	fields: [HeroSection, AboutUsSection, ProjectsSection, ContactSection],
};
