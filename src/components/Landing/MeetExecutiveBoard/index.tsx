import React from "react";
import CTAButton from "@/components/General/CTAButton";
import PageSection from "@/components/General/PageSection";
import styles from "./MeetExecutiveBoard.module.css";
import Image from "next/image";
import { demoExecMember, drawedArrow, drawedCrown } from "@/image-paths";

export default function MeetExecutiveBoard() {
	return (
		<PageSection>
			<div className="row">
				<div className={`col-12 col-md-4 ${styles.meetExecBox}`}>
					<h2>Conoce a la</h2>
					<h1>Mesa Directiva</h1>
					<Image
						src={drawedCrown}
						alt="Corona"
						className={styles.crown}
					/>
					<Image
						src={drawedArrow}
						alt="Corona"
						className={styles.arrow}
					/>
					<CTAButton link="/nosotros" text="Estructura de SIAFI" />
				</div>
				<div className="col"></div>
				<div className={`col-12 col-md-6 ${styles.execMembers}`}>
					<h1>Alexis Sosa</h1>
					<div className={styles.execMemberAvatar}>
						<Image
							src={demoExecMember}
							alt="Alexis Sosa"
							className={styles.execMemberPhoto}
						/>
						<div className={styles.excecMemberAvatarInfo}>
							<h4>El Presi</h4>
							<a
								href="https://www.instagram.com/"
								target="_blank"
							>
								@alexissosa
							</a>
						</div>
					</div>
					<p className={styles.execMemberDescription}>
						Andikan is one of the amazing kreatives of KND. He has
						over 4 years of design experience and is currently
						creating design solutions as a freelancer. Want to know
						more about Andikan? Follow his socials!
					</p>
					<div className={styles.execMembersCarrousel}>
						<Image
							src={demoExecMember}
							alt="Alexis Sosa"
							className={`${styles.execMemberPhoto} ${styles.active}`}
						/>
						<Image
							src={demoExecMember}
							alt="Alexis Sosa"
							className={styles.execMemberPhoto}
						/>
						<Image
							src={demoExecMember}
							alt="Alexis Sosa"
							className={styles.execMemberPhoto}
						/>
						<Image
							src={demoExecMember}
							alt="Alexis Sosa"
							className={styles.execMemberPhoto}
						/>
						<Image
							src={demoExecMember}
							alt="Alexis Sosa"
							className={styles.execMemberPhoto}
						/>
						<Image
							src={demoExecMember}
							alt="Alexis Sosa"
							className={styles.execMemberPhoto}
						/>
						<Image
							src={demoExecMember}
							alt="Alexis Sosa"
							className={styles.execMemberPhoto}
						/>
						<Image
							src={demoExecMember}
							alt="Alexis Sosa"
							className={styles.execMemberPhoto}
						/>
					</div>
				</div>
			</div>
		</PageSection>
	);
}
