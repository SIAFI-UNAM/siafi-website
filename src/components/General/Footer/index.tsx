import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import {
	facebookFooterIcon,
	instagramFooterIcon,
	linkedinFooterIcon,
	logoCIA,
	logoDIMEI,
	logoFI,
	logoSIAFIWhite,
	tikTokFooterIcon,
	youtubeFooterIcon,
} from "@/image-paths";
import SocialMediaIcon from "@/components/Footer/SocialMediaIcon";
import Link from "next/link";
import { Contact } from "@/models/Contact";
import { getContactInfo } from "@/sanity/sanity-utils";

/**
 * Footer component to display the footer of the website.
 * @param props - The props of the component.
 * @returns The footer component.
 */
export default async function Footer() {
	const contactInfo = await getContactInfo();

	return (
		<div className={`${styles.footerContainer}`}>
			<div className={`container`}>
				<div className={`row ${styles.footerContent}`}>
					<div className={`col-12 col-md-4 ${styles.footerColumn}`}>
						<Link href="/">
							<Image
								src={logoSIAFIWhite}
								alt="logo"
								width={125}
							/>
						</Link>
						<div className={styles.socialMediaRow}>
							{contactInfo.instagram && (
								<SocialMediaIcon
									icon={instagramFooterIcon}
									link={contactInfo.instagram}
								/>
							)}
							{contactInfo.facebook && (
								<SocialMediaIcon
									icon={facebookFooterIcon}
									link={contactInfo.facebook}
								/>
							)}
							{contactInfo.linkedin && (
								<SocialMediaIcon
									icon={linkedinFooterIcon}
									link={contactInfo.linkedin}
								/>
							)}
							{contactInfo.tiktok && (
								<SocialMediaIcon
									icon={tikTokFooterIcon}
									link={contactInfo.tiktok}
								/>
							)}
							{contactInfo.youtube && (
								<SocialMediaIcon
									icon={youtubeFooterIcon}
									link={contactInfo.youtube}
								/>
							)}
							{/* {contactInfo.twitter && (
								<SocialMediaIcon
									icon={youtubeFooterIcon}
									link={contactInfo.twitter}
								/>
							)} */}
							{/* {contactInfo.github && (
								<SocialMediaIcon
									icon={youtubeFooterIcon}
									link={contactInfo.github}
								/>
							)} */}
						</div>
						<div className={styles.footerDirection}>
							<h4>Dirección</h4>
							<p>{contactInfo.address}</p>
						</div>
					</div>
					<div className="col-md-1 col-lg-2 d-none d-md-block"></div>
					<div
						className={`col-6 col-md-2 ${styles.footerColumn} ${styles.institutes}`}
					>
						<h4>Contacto</h4>
						<ul>
							<li>
								<a href={`mailto:${contactInfo.email}`}>
									{contactInfo.email}
								</a>
							</li>
						</ul>
					</div>
					<div
						className={`col-6 col-md-2 ${styles.footerColumn} ${styles.institutes}`}
					>
						<h4>Navegación</h4>
						<ul>
							<li>
								<Link href="/">Inicio</Link>
							</li>
							<li>
								<Link href="/nosotros">Nosotros</Link>
							</li>
							<li>
								<Link href="/proyectos">Proyectos</Link>
							</li>
							<li>
								<Link href="/blog">Blog</Link>
							</li>
							<li>
								<Link href="/creditos">Créditos</Link>
							</li>
						</ul>
					</div>
					<div
						className={`col-12 col-md-3 col-lg-2 mt-5 mt-md-0 ${styles.footerColumn} ${styles.institutes}`}
					>
						<h4>Instituciones</h4>
						<ul>
							<li>
								<a
									href="https://www.ingenieria.unam.mx/dimei/"
									target="_blank"
								>
									<Image
										src={logoDIMEI}
										alt="logo DIMEI"
										width={150}
									/>
								</a>
							</li>
							<li>
								<a
									href="https://www.ingenieria.unam.mx/cia/"
									target="_blank"
								>
									<Image
										src={logoCIA}
										alt="logo CIA"
										width={100}
									/>
								</a>
							</li>
							<li>
								<a
									href="https://www.ingenieria.unam.mx/"
									target="_blank"
								>
									<Image
										src={logoFI}
										alt="logo Facultad de Ingeniería"
										height={100}
									/>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
