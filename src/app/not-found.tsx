import PageSection from "@/components/General/PageSection";
import React from "react";
import PagesLayout from "./(webpage)/layout";
import styles from "./NotFound.module.css";
import Image from "next/image";
import { heartbreakDoodle, siafiBallGlasses } from "@/image-paths";
import CTAButton from "@/components/General/CTAButton";

/**
 * Error 404 page component.
 * @returns {React.ReactElement} The 404 page component.
 */
const Error404Page = () => {
	return (
		<PagesLayout>
			<PageSection>
				<Image src={siafiBallGlasses} alt="404" width={200} />
				<div className={styles.titleContainer}>
					<h1 className={styles.title}>404 - Página no encontrada</h1>
					<Image
						src={heartbreakDoodle}
						alt="heartbreak icon"
						width={75}
					/>
				</div>
				<p className={styles.description}>
					Oh no! Parece que la página que buscas no existe. Por favor,
					verifica la URL o regresa a la página de inicio.
				</p>
				<CTAButton link="/" text="Regresar a la página de inicio" />
			</PageSection>
		</PagesLayout>
	);
};

export default Error404Page;
