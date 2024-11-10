import { StructureResolver } from "sanity/structure";
import {
	HomeIcon,
	CogIcon,
	BookIcon,
	DiamondIcon,
	DocumentTextIcon,
} from "@sanity/icons";
import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

/**
 * Custom structure for the Sanity Studio, this allows us to have "Singleton" documents (documents that are unique and only one of them can exist) and also to have a custom order of the documents in the sidebar.
 * @param {StructureResolver} S The structure resolver from Sanity.
 * @returns {StructureResolver} The custom structure for the Sanity Studio.
 */
export const sanityCustomStructure: StructureResolver = (S, context) => {
	return S.list()
		.title("Contenido")
		.items([
			// Singleton items
			S.listItem()
				// Nosotros page singleton
				.title("Página de inicio (Landing)")
				.icon(HomeIcon)
				.child(
					S.document()
						.schemaType("landingPage")
						.documentId("landingPage")
						.title("Página de inicio (Landing)"),
				),
			S.listItem()
				// Nosotros page singleton
				.title("Página: Nosotros")
				.icon(BookIcon)
				.child(
					S.document()
						.schemaType("about_us")
						.documentId("about_us")
						.title("Página: Nosotros"),
				),
			S.listItem()
				// Blogs & Projects lists pages singleton
				.title("Páginas de listado de blogs y proyectos")
				.icon(DocumentTextIcon)
				.child(
					S.document()
						.schemaType("blog_projects_lists_pages")
						.documentId("blog_projects_lists_pages")
						.title("Páginas de listado de blogs y proyectos"),
				),
			S.listItem()
				// Nosotros page singleton
				.title("Contacto y otros")
				.icon(CogIcon)
				.child(
					S.document()
						.schemaType("contact_and_others")
						.documentId("contact_and_others")
						.title("Contacto y otros"),
				),
			S.divider(),
			// Orderable items
			orderableDocumentListDeskItem({
				type: "executive_board",
				S,
				context,
				icon: DiamondIcon,
				title: "Miembros Mesa Directiva",
			}),
			...S.documentTypeListItems().filter((listItem) => {
				return (
					!["contact_and_others"].includes(
						listItem.getId() as string,
					) &&
					!["landingPage"].includes(listItem.getId() as string) &&
					!["executive_board"].includes(listItem.getId() as string) &&
					!["blog_projects_lists_pages"].includes(
						listItem.getId() as string,
					) &&
					!["about_us"].includes(listItem.getId() as string)
				);
			}),
		]);
};
