import Footer from "@/components/General/Footer";
import NavBar from "@/components/General/NavBar";
import type { Metadata } from "next";

// export const metadata: Metadata = {
// 	title: "SIAFI UNAM - Sociedad de Inteliencia Artificial de la Facultad de Ingeniería, UNAM",
// 	description:
// 		"SIAFI es una sociedad de estudiantes de la Facultad de Ingeniería de la UNAM que busca promover la Inteligencia Artificial en la comunidad universitaria.",
// };

export default function PagesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<NavBar />
			{children}
			<Footer />
		</>
	);
}
