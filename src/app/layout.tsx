import type { Metadata } from "next";
import "@styles/globals.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";

export const metadata: Metadata = {
	title: "SIAFI UNAM - Sociedad de Inteliencia Artificial de la Facultad de Ingeniería, UNAM",
	description:
		"SIAFI es una sociedad de estudiantes de la Facultad de Ingeniería de la UNAM que busca promover la Inteligencia Artificial en la comunidad universitaria.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="es">
			<body>{children}</body>
		</html>
	);
}
