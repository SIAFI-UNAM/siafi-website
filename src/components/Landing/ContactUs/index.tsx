import React from "react";
import styles from "./ContactUs.module.css";
import Image from "next/image";
import { signArrow } from "@/image-paths";
import { ContactSection } from "@/models/Landing";
import { Contact } from "@/models/Contact";

type ContactUsProps = {
	contactUsSection: ContactSection;
	contactInfo: Contact;
};

export default function ContactUs({
	contactUsSection,
	contactInfo,
}: ContactUsProps) {
	return (
		<div className={styles.container} id="contact">
			<div className={styles.card}>
				<Image
					src={signArrow}
					alt="Sign arrow"
					className={styles.signArrow}
				/>
				<div className="row">
					<div className="col-12 col-lg-8">
						<div className={styles.contactus}>
							<h4>{contactUsSection.subtitle}</h4>
							<h2>{contactUsSection.title}</h2>
							<a href="mailto:contacto@siafi-unam.org">
								{contactInfo.email}
							</a>
						</div>
					</div>
					<div className={`col-12 col-lg-4 ${styles.direction}`}>
						<h3>Encuentranos en:</h3>
						<p>{contactInfo.address}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
