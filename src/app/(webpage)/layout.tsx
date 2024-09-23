import Footer from "@/components/General/Footer";
import NavBar from "@/components/General/NavBar";

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
