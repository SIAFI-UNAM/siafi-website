import React from "react";
import PageSection from "@/components/General/PageSection";
import styles from "./WhatIsSIAFI.module.css";
import Image from "next/image";
import { siafiGroup } from "@/image-paths";
import CTAButton from "@/components/General/CTAButton";
import SketchCircledText from "@/components/General/SketchCircledText";
import Link from "next/link";

export default function WhatIsSIAFI() {
	return (
		<PageSection
			id="que-es-siafi"
			title="¿Qué es SIAFI?"
			subtitle="Sobre Nosotros"
		>
			<div className={styles.content}>
				<p className={styles.description}>
					Somos la Sociedad de Inteligencia Artificial de la Facultad
					de Ingeniería de la UNAM, conformado por estudiantes
					apasionados por la inteligencia artificial y la ingeniería
					de software. Nosotros estamos en busca de constantes retos,
					desafiando los límites creando soluciones innovadoras.
					<SketchCircledText>
						{" "}
						<Link href="/contacto">¡Únete a nosotros!</Link>
					</SketchCircledText>
				</p>
				<Image
					src={siafiGroup}
					alt="The students of SIAFI!"
					className={styles.aboutPhoto}
				/>
				<div className="mt-2 mb-2">
					<CTAButton text="Ver más" link="/sobre-nosotros" />
				</div>
			</div>
		</PageSection>
	);
}
