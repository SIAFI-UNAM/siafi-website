"use client";
import React, { useEffect, useState } from "react";
import styles from "./AboutUsExecutiveBoard.module.css";
import Image from "next/image";
import { drawedArrow, drawedCrown } from "@/image-paths";
import type { Member } from "@/models/Member";
import { PortableText } from "@portabletext/react";

type Props = {
	members: Array<Member>;
};

/**
 * This component displays the executive board members of SIAFI on the about us page.
 * @param {Props} props - The props of the component.
 * @param {Array<Member>} props.members - The members of the executive board.
 * @returns {JSX.Element} MeetExecutiveBoard component.
 * @todo Add arrow functionality to the carousel.
 */
export default function AboutUsExecutiveBoard({ members }: Props) {
	const [activeMember, setActiveMember] = useState(0);
	const [selectedMember, setSelectedMember] = useState<Member>(members[0]);

	useEffect(() => {
		setSelectedMember(members[activeMember]);
	}, [members, activeMember]);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveMember((prev) => (prev + 1) % members.length);
		}, 3500);
		return () => clearInterval(interval);
	}, [members.length]);

	return (
		<div className={styles.container}>
			<div className="container">
				<div className={styles.meetExecBox}>
					<h2>Conoce a la</h2>
					<h1>Mesa Directiva</h1>
					<Image
						src={drawedCrown}
						alt="Corona"
						className={styles.crown}
					/>
				</div>
				<div className="row">
					<div
						className={`col-12 col-md-3 ${styles.memberPhotoContainer}`}
					>
						<Image
							src={selectedMember.image.url}
							alt={selectedMember.image.alt}
							width={250}
							height={250}
							className={styles.selectedExecMemberPhoto}
						/>
					</div>
					<div className="col d-none d-md-block"></div>
					<div className={`col-12 col-md-8 ${styles.execMembers}`}>
						<h1>{selectedMember.name}</h1>
						<div className={styles.execMemberAvatar}>
							<div className={styles.excecMemberAvatarInfo}>
								<h4>{selectedMember.role}</h4>
								<a
									href={selectedMember.socialMediaLink}
									target="_blank"
								>
									{selectedMember.username}
								</a>
							</div>
						</div>
						<div className={styles.execMemberDescription}>
							<PortableText value={selectedMember.description} />
						</div>
						<div className={styles.execMembersCarrousel}>
							{members.map((member, indx) => (
								<Image
									key={member._id}
									src={member.image.url}
									alt={member.image.alt}
									width={48}
									height={48}
									onClick={() => setActiveMember(indx)}
									className={`${styles.execMemberPhoto} ${
										activeMember === indx
											? styles.active
											: ""
									}`}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
