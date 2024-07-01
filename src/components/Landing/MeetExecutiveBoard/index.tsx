"use client";
import React, { useEffect, useState } from "react";
import CTAButton from "@/components/General/CTAButton";
import PageSection from "@/components/General/PageSection";
import styles from "./MeetExecutiveBoard.module.css";
import Image from "next/image";
import { demoExecMember, drawedArrow, drawedCrown } from "@/image-paths";
import { Member } from "@/models/Member";

type Props = {
	members: Array<Member>;
};

export default function MeetExecutiveBoard({ members }: Props) {
	const [activeMember, setActiveMember] = useState(0);
	const [selectedMember, setSelectedMember] = useState<Member>(members[0]);

	useEffect(() => {
		setSelectedMember(members[activeMember]);
	}, [members, activeMember]);

	return (
		<PageSection>
			<div className="row">
				<div
					className={`col-12 col-md-6 col-lg-4 ${styles.meetExecBox}`}
				>
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
				<div className="col d-none d-lg-block"></div>
				<div className={`col-12 col-md-6 ${styles.execMembers}`}>
					<h1>
						{selectedMember.firstName} {selectedMember.lastName}
					</h1>
					<div className={styles.execMemberAvatar}>
						<Image
							src={selectedMember.image}
							alt={selectedMember.userName}
							width={48}
							height={48}
							className={styles.execMemberPhoto}
						/>
						<div className={styles.excecMemberAvatarInfo}>
							<h4>{selectedMember.role}</h4>
							<a href={selectedMember.instagram} target="_blank">
								{selectedMember.userName}
							</a>
						</div>
					</div>
					<p className={styles.execMemberDescription}>
						{selectedMember.description}
					</p>
					<div className={styles.execMembersCarrousel}>
						{members.map((member, indx) => (
							<Image
								key={member.id}
								src={member.image}
								alt={`${member.userName} photo`}
								width={48}
								height={48}
								onClick={() => setActiveMember(indx)}
								className={`${styles.execMemberPhoto} ${
									activeMember === indx ? styles.active : ""
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</PageSection>
	);
}
