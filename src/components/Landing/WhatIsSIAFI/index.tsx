import React from "react";
import PageSection from "@/components/General/PageSection";
import styles from "./WhatIsSIAFI.module.css";
import Image from "next/image";
import CTAButton from "@/components/General/CTAButton";
import SketchCircledText from "@/components/General/SketchCircledText";
import { AboutSection } from "@/models/Landing";
import { PortableText } from "@portabletext/react";

type WhatIsSIAFIProps = {
	aboutInfo: AboutSection;
};

export default function WhatIsSIAFI({ aboutInfo }: WhatIsSIAFIProps) {
	return (
		<PageSection
			id="que-es-siafi"
			title={aboutInfo.title}
			subtitle={aboutInfo.subtitle}
		>
			<div className={styles.content}>
				<div className={styles.description}>
					<PortableText value={aboutInfo.description} />
					<SketchCircledText>
						{" "}
						<a target="_blank" href={aboutInfo.cta_link}>
							{aboutInfo.cta_text}
						</a>
					</SketchCircledText>
				</div>
				<Image
					src={aboutInfo.image}
					width={700}
					height={500}
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
