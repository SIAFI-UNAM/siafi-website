import Image from "next/image";
import styles from "./Landing.module.css";
import NavBar from "@/components/General/NavBar";
import Hero from "@/components/Landing/Hero";
import AdvicesCard from "@/components/Landing/AdvicesCard";
import advicesDummyData from "@/data/dummy-Advices.json";
import { Advice } from "@/models/Advice";
import WhatIsSIAFI from "@/components/Landing/WhatIsSIAFI";
import LatestBlogs from "@/components/Landing/LatestBlogs";
import MeetExecutiveBoard from "@/components/Landing/MeetExecutiveBoard";
import OurProjects from "@/components/Landing/OurProjects";

export default function LandingPage() {
	const dummyData = advicesDummyData as [Advice];
	return (
		<main>
			<Hero />
			{/* <section className={`container`}>
				<AdvicesCard advices={dummyData} />
			</section> */}
			<WhatIsSIAFI />
			<LatestBlogs />
			<MeetExecutiveBoard />
			<OurProjects />
			<div>Ellos confian en nosotros</div>
			<div>Contactanos!</div>
		</main>
	);
}
