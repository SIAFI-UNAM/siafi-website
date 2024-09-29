import React from "react";
import styles from "./AboutUsHero.module.css";
import Image from "next/image";
import { Contact } from "@/models/Contact";
import SocialMediaIcon from "@/components/Footer/SocialMediaIcon";
import {
	aboutUsdrawedArrow,
	facebookFooterIcon,
	instagramFooterIcon,
	linkedinFooterIcon,
	siafiBallGlasses,
	tikTokFooterIcon,
	youtubeFooterIcon,
} from "@/image-paths";

type AboutUsHeroProps = {
	title: string;
	subtitle: string;
	heroImage: {
		alt: string;
		url: string;
	};
	contactInfo: Contact;
};

const AboutUsHero = ({
	title,
	subtitle,
	heroImage,
	contactInfo,
}: AboutUsHeroProps) => {
	return (
		<header className={`${styles.heroContainer} container`}>
			<div className={styles.infoContainer}>
				<h1 className={styles.title}>{title}</h1>
				<div className={styles.followUsContainer}>
					<div className={styles.followUs}>
						<h4 className={styles.subtitle}>{subtitle}</h4>
						<div className={styles.socialMediaRow}>
							{contactInfo.instagram && (
								<SocialMediaIcon
									icon={instagramFooterIcon}
									variant="light"
									link={contactInfo.instagram}
								/>
							)}
							{contactInfo.facebook && (
								<SocialMediaIcon
									icon={facebookFooterIcon}
									variant="light"
									link={contactInfo.facebook}
								/>
							)}
							{contactInfo.linkedin && (
								<SocialMediaIcon
									icon={linkedinFooterIcon}
									variant="light"
									link={contactInfo.linkedin}
								/>
							)}
							{contactInfo.tiktok && (
								<SocialMediaIcon
									icon={tikTokFooterIcon}
									variant="light"
									link={contactInfo.tiktok}
								/>
							)}
							{contactInfo.youtube && (
								<SocialMediaIcon
									icon={youtubeFooterIcon}
									variant="light"
									link={contactInfo.youtube}
								/>
							)}
							{/* {contactInfo.twitter && (
								<SocialMediaIcon
									icon={youtubeFooterIcon}
									variant="light"
									link={contactInfo.twitter}
								/>
							)} */}
							{/* {contactInfo.github && (
								<SocialMediaIcon
									icon={youtubeFooterIcon}
									variant="light"
									link={contactInfo.github}
								/>
							)} */}
						</div>
					</div>
					<Image
						src={siafiBallGlasses}
						className={styles.siafiBall}
						alt="SIAFI Ball Lentes"
						width={150}
					/>
					<Image
						src={aboutUsdrawedArrow}
						className={styles.drawedArrow}
						alt="Drawed arrow"
						width={50}
					/>
				</div>
			</div>
			<div className={styles.heroImageContainer}>
				<Image
					src={heroImage.url}
					className={styles.heroImage}
					alt="About us hero image"
					width={700}
					height={400}
				/>
				<p className={styles.heroImageAlt}>{heroImage.alt}</p>
			</div>
		</header>
	);
};

export default AboutUsHero;
