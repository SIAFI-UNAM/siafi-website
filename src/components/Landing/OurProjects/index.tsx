import React from "react";
import CTAButton from "@/components/General/CTAButton";
import PageSection from "@/components/General/PageSection";
import styles from "./OurProjects.module.css";
import ProjectCard from "@/components/Projects/ProjectCard";
import Image from "next/image";
import { demoProjectLogo } from "@/image-paths";

export default function OurProjects() {
	return (
		<PageSection>
			<div className="row">
				<div className={`col-12 col-md-4 ${styles.sectionInfo}`}>
					<h2>Sorprendete con nuestros proyectos</h2>
					<p>
						As a sponsor, we re promising reach to thousands of
						people who are interested in your brand. What better way
						to get your brand in front of people.
					</p>
					<CTAButton
						link="/proyectos"
						text="Ver proyectos"
						className={styles.cta}
					/>
				</div>
				<div className="col-12 col-md-8">
					<div className="row g-2">
						<div className="col-4">
							<ProjectCard linkTo="/">
								<Image
									src={demoProjectLogo}
									alt="Demo Project"
								/>
							</ProjectCard>
						</div>
						<div className="col-4">
							<ProjectCard linkTo="/">
								<Image
									src={demoProjectLogo}
									alt="Demo Project"
								/>
							</ProjectCard>
						</div>
						<div className="col-4">
							<ProjectCard linkTo="/">
								<Image
									src={demoProjectLogo}
									alt="Demo Project"
								/>
							</ProjectCard>
						</div>
						<div className="col-4">
							<ProjectCard linkTo="/">
								<Image
									src={demoProjectLogo}
									alt="Demo Project"
								/>
							</ProjectCard>
						</div>
						<div className="col-4">
							<ProjectCard linkTo="/">
								<Image
									src={demoProjectLogo}
									alt="Demo Project"
								/>
							</ProjectCard>
						</div>
						<div className="col-4">
							<ProjectCard linkTo="/">
								<Image
									src={demoProjectLogo}
									alt="Demo Project"
								/>
							</ProjectCard>
						</div>
						<div className="col-4">
							<ProjectCard linkTo="/">
								<Image
									src={demoProjectLogo}
									alt="Demo Project"
								/>
							</ProjectCard>
						</div>
						<div className="col-4">
							<ProjectCard linkTo="/">
								<Image
									src={demoProjectLogo}
									alt="Demo Project"
								/>
							</ProjectCard>
						</div>
						<div className="col-4">
							<ProjectCard linkTo="/">
								<div className={styles.moreProjectsSoon}>
									<p>+</p>
									<p>En desarrollo</p>
								</div>
							</ProjectCard>
						</div>
					</div>
				</div>
			</div>
		</PageSection>
	);
}
