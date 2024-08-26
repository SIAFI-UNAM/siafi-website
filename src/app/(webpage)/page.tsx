import Hero from "@/components/Landing/Hero";
// import AdvicesCard from "@/components/Landing/AdvicesCard";
import advicesDummyData from "@/data/dummy-Advices.json";
import { Advice } from "@/models/Advice";
import WhatIsSIAFI from "@/components/Landing/WhatIsSIAFI";
import LatestBlogs from "@/components/Landing/LatestBlogs";
import MeetExecutiveBoard from "@/components/Landing/MeetExecutiveBoard";
import OurProjects from "@/components/Landing/OurProjects";
import Sponsors from "@/components/Landing/Sponsors";
import ContactUs from "@/components/Landing/ContactUs";
import mockMembers from "@/data/dummy-Members.json";
import type { LandingInfo } from "@/models/Landing";
import type { Contact } from "@/models/Contact";
import { getContactInfo, getLandingInfo } from "@/sanity/sanity-utils";
// import { Metadata } from "next";

// type Params = {
// 	params: {
// 		hero: HeroInfo;
// 		contact: Contact;
// 	};
// };

// export const metadata: Metadata = {
//     title: "Ayuda",
// };

export default async function LandingPage() {
	const landingInfo = await getLandingInfo();
	const contact = await getContactInfo();

	return (
		<main>
			<Hero hero={landingInfo.hero} contact={contact} />
			{/* <section className={`container`}>
				<AdvicesCard advices={dummyData} />
			</section> */}
			<WhatIsSIAFI aboutInfo={landingInfo.aboutSection} />
			<LatestBlogs />
			<MeetExecutiveBoard members={mockMembers} />
			<OurProjects projectsSection={landingInfo.projectsSection} />
			<Sponsors />
			<ContactUs
				contactUsSection={landingInfo.contactSection}
				contactInfo={contact}
			/>
		</main>
	);
}

// Function to make the page staticly generated
// export async function generateStaticParams() {
// 	const heroInfo = await getHeroInfo();
// 	const contactInfo = await getContactInfo();
// 	return { params: { hero: heroInfo, contact: contactInfo } };
// }
