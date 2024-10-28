import SimplePage from "@/components/General/SimplePage";
import ProjectCard from "@/components/Projects/ProjectCard";
import { getProjects, getProjectsListPageInfo } from "@/sanity/sanity-utils";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "Proyectos",
};

/**
 * This page shows all the projects that the SIAFI members have worked on.
 * @returns The projects page.
 */
const ProyectosPage = async () => {
	const projectsListInfo = await getProjectsListPageInfo();
	const projects = await getProjects();

	return (
		<SimplePage
			title={projectsListInfo.title}
			description={projectsListInfo.description}
		>
			<div className="row g-2">
				{projects.map((proj) => (
					<div key={proj._id} className="col-12 col-md-6">
						<ProjectCard
							linkTo={`/proyectos/${proj.slug}`}
							title={proj.title}
							projectImage={proj.image}
							size="lg"
						/>
					</div>
				))}
			</div>
		</SimplePage>
	);
};

export default ProyectosPage;
