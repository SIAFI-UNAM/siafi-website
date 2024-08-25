import { StructureResolver } from "sanity/desk";
import { HomeIcon, CogIcon } from "@sanity/icons";

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
					!["contact_and_others"].includes(listItem.getId()) &&
					!["landingPage"].includes(listItem.getId())
				);
			}),
		]);
};
