"use client";
import React, { useEffect, useState } from "react";
import styles from "./AboutUsExecutiveBoard.module.css";
import Image from "next/image";
import { drawedArrow, drawedCrown, siafiBallGlasses } from "@/image-paths";
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
	const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

	useEffect(() => {
		setSelectedMember(members[activeMember]);
	}, [members, activeMember]);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveMember((prev) => (prev + 1) % members.length);
		}, 5000);
		setIntervalId(interval);
		return () => clearInterval(interval);
	}, [members.length]);

	const handleMemberClick = (indx: number) => {
		setActiveMember(indx);
		if (intervalId) {
			clearInterval(intervalId);
		}
		const newInterval = setInterval(() => {
			setActiveMember((prev) => (prev + 1) % members.length);
		}, 5000);
		setIntervalId(newInterval);
	};

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
							src={selectedMember.image.url ?? siafiBallGlasses}
							alt={selectedMember.image.alt}
							width={250}
							height={250}
							className={styles.selectedExecMemberPhoto}
							loading="lazy"
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
									src={member.image.url ?? siafiBallGlasses}
									alt={member.image.alt}
									width={48}
									height={48}
									onClick={() => handleMemberClick(indx)}
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
