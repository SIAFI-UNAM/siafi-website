import React from "react";
import CTAButton from "@/components/General/CTAButton";
import PageSection from "@/components/General/PageSection";
import styles from "./OurProjects.module.css";
import ProjectCard from "@/components/Projects/ProjectCard";
import Image from "next/image";
import { demoProjectLogo } from "@/image-paths";
import { ProjectsSection } from "@/models/Landing";
import { PortableText } from "@portabletext/react";
import type { ProjectInfo } from "@/models/Project";

type OurProjectsProps = {
	projectsSection: ProjectsSection;
	projects: ProjectInfo[];
};

export default function OurProjects({
	projectsSection,
	projects,
}: OurProjectsProps) {
	return (
		<PageSection id="proyectos">
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
						{projects.map((proj) => (
							<div key={proj._id} className="col-4">
								<ProjectCard
									linkTo={`/proyectos/${proj.slug}`}
									title={proj.title}
									projectImage={proj.image}
								/>
							</div>
						))}
						<div className="col-4">
							<ProjectCard
								title="Ver + proyectos"
								linkTo="#proyectos"
								variant="blank"
							></ProjectCard>
						</div>
					</div>
				</div>
			</div>
		</PageSection>
	);
}
