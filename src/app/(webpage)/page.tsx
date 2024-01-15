import Image from "next/image";
import styles from "./Landing.module.css";
import NavBar from "@/components/General/NavBar";
import Hero from "@/components/Landing/Hero";

export default function LandingPage() {
	return (
		<div>
			<Hero />
		</div>
	);
}
