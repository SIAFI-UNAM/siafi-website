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

export default function Footer() {
	return (
		<div className={`${styles.footerContainer}`}>
			<div className={`container`}>
				<div className={`row ${styles.footerContent}`}>
					<div className={`col-12 col-md-4 ${styles.footerColumn}`}>
						<Image src={logoSIAFIWhite} alt="logo" width={125} />
						<div className={styles.socialMediaRow}>
							<SocialMediaIcon
								icon={instagramFooterIcon}
								link={"https://www.instagram.com/unam.siafi/"}
							/>{" "}
							<SocialMediaIcon
								icon={facebookFooterIcon}
								link={"https://www.facebook.com/UNAM.SIAFI"}
							/>{" "}
							<SocialMediaIcon
								icon={linkedinFooterIcon}
								link={
									"https://www.linkedin.com/company/siafiunam/"
								}
							/>{" "}
							<SocialMediaIcon
								icon={tikTokFooterIcon}
								link={"https://www.tiktok.com/@unam.siafi"}
								isPureIcon
							/>{" "}
							<SocialMediaIcon
								icon={youtubeFooterIcon}
								link={"https://www.youtube.com/c/SIAFIUNAM"}
							/>
						</div>
						<div className={styles.footerDirection}>
							<h4>Dirección</h4>
							<p>
								Edificio CIA, 4to piso, conjunto sur, Circuito
								interior 3000 Col. Universidad Nacional Autónoma
								de México Coyoacán, C.P. 04510 Ciudad de México,
								México
							</p>
						</div>
					</div>
					<div className="col-md-1 col-lg-2 d-none d-md-block"></div>
					<div
						className={`col-6 col-md-2 ${styles.footerColumn} ${styles.institutes}`}
					>
						<h4>Contacto</h4>
						<ul>
							<li>
								<a href="mailto:contacto@siafi-unam.org">
									contacto@siafi-unam.org
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
