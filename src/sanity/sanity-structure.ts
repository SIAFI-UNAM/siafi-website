import { StructureResolver } from "sanity/desk";
import { HomeIcon, CogIcon, BookIcon } from "@sanity/icons";

/**
 * Custom structure for the Sanity Studio, this allows us to have "Singleton" documents (documents that are unique and only one of them can exist) and also to have a custom order of the documents in the sidebar.
 * @param {StructureResolver} S The structure resolver from Sanity.
 * @returns {StructureResolver} The custom structure for the Sanity Studio.
 */
export const sanityCustomStructure: StructureResolver = (S) => {
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
						.title("Página de inicio (Landing)")
				),
			S.listItem()
				// Nosotros page singleton
				.title("Página: Nosotros")
				.icon(BookIcon)
				.child(
					S.document()
						.schemaType("about_us")
						.documentId("about_us")
						.title("Página: Nosotros")
				),
			S.listItem()
				// Nosotros page singleton
				.title("Contacto y otros")
				.icon(CogIcon)
				.child(
					S.document()
						.schemaType("contact_and_others")
						.documentId("contact_and_others")
						.title("Contacto y otros")
				),
			S.divider(),
			...S.documentTypeListItems().filter((listItem) => {
				return (
					!["contact_and_others"].includes(
						listItem.getId() as string
					) && !["landingPage"].includes(listItem.getId() as string)
				);
			}),
		]);
};
