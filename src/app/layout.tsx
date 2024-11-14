import type { Metadata } from "next";
import Script from "next/script";
// Bootstrap grid
// import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
// Global styles
import "@styles/globals.css";
// Local Fonts
import "@assets/fonts/CabinetGrotesk/font.css";
import "@assets/fonts/Poppins/font.css";
import "@assets/fonts/StudyAlone/font.css";

export const metadata: Metadata = {
	title: {
		template: "%s | SIAFI UNAM",
		default:
			"SIAFI UNAM - Sociedad de Inteligencia Artificial de la Facultad de Ingeniería de la UNAM",
	},
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

			{/* Google Analytics scripts */}
			<Script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-65V3J2LVGB"
			></Script>
			<Script id="google-analytics">
				{`window.dataLayer = window.dataLayer || []; function gtag()
				{dataLayer.push(arguments)}
				gtag('js', new Date()); gtag('config', 'G-65V3J2LVGB');`}
			</Script>
		</html>
	);
}
