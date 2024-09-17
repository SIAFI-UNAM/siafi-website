import Hero from "@/components/Landing/Hero";
// import AdvicesCard from "@/components/Landing/AdvicesCard";
import WhatIsSIAFI from "@/components/Landing/WhatIsSIAFI";
import LatestBlogs from "@/components/Landing/LatestBlogs";
import MeetExecutiveBoard from "@/components/Landing/MeetExecutiveBoard";
import OurProjects from "@/components/Landing/OurProjects";
import Sponsors from "@/components/Landing/Sponsors";
import ContactUs from "@/components/Landing/ContactUs";
import {
	getContactInfo,
	getExecutiveBoardMembers,
	getLandingInfo,
	getLandingProjects,
	getLatestBlogs,
	getSponsors,
} from "@/sanity/sanity-utils";
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
	const blogs = await getLatestBlogs();
	const execMembers = await getExecutiveBoardMembers();
	const projects = await getLandingProjects();
	const sponsors = await getSponsors();

	return (
		<main>
			<Hero hero={landingInfo.hero} contact={contact} />
			{/* <section className={`container`}>
				<AdvicesCard advices={dummyData} />
			</section> */}
			<WhatIsSIAFI aboutInfo={landingInfo.aboutSection} />
			<LatestBlogs blogs={blogs} />
			<MeetExecutiveBoard members={execMembers} />
			<OurProjects
				projectsSection={landingInfo.projectsSection}
				projects={projects}
			/>
			<Sponsors sponsors={sponsors} />
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
