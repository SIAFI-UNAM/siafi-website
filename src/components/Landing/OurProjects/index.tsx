import React from "react";
import CTAButton from "@/components/General/CTAButton";
import PageSection from "@/components/General/PageSection";
import styles from "./OurProjects.module.css";
import ProjectCard from "@/components/Projects/ProjectCard";
import Image from "next/image";
import { demoProjectLogo } from "@/image-paths";
import { ProjectsSection } from "@/models/Landing";
import { PortableText } from "@portabletext/react";

type OurProjectsProps = {
	projectsSection: ProjectsSection;
};

export default function OurProjects({ projectsSection }: OurProjectsProps) {
	return (
		<PageSection>
			<div className="row">
				<div
					className={`col-12 col-md-6 col-lg-4 ${styles.sectionInfo}`}
				>
					<h2>{projectsSection.title}</h2>
					<PortableText value={projectsSection.description} />
					<CTAButton
						link="/proyectos"
						text="Ver proyectos"
						className={styles.cta}
					/>
				</div>
				<div className="col-12 col-md-6 col-lg-8">
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
