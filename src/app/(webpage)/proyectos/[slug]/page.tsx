import DetailPage from "@/components/General/DetailPage";
import React from "react";
import { PortableText } from "@portabletext/react";
import { getProjectBySlug, getProjects } from "@/sanity/sanity-utils";
import PageSection from "@/components/General/PageSection";
import Image from "next/image";
import { heartbreakDoodle, siafiBallSad } from "@/image-paths";
import styles from "./ProjectsDetail.module.css";
import CTAButton from "@/components/General/CTAButton";
import {
	getReadingTimeFromPortableText,
	portableTextToPlainText,
} from "@/lib/portableTextUtils";
import PortableTextCustomComponents from "@/components/Sanity/PortableTextCustomComponents";

interface ProjectDetailParams {
	params: {
		slug: string;
	};
}

export async function generateStaticParams() {
	const allProjects = await getProjects();

	return allProjects.map((project) => ({
		slug: project.slug,
	}));
}

export async function generateMetadata({ params }: ProjectDetailParams) {
	const { slug } = params;
	const ProjectInfo = await getProjectBySlug(slug);
	const projectDescription = ProjectInfo
		? portableTextToPlainText(ProjectInfo.description).slice(0, 256)
		: "Blog no encontrado";
	const projectTitle = ProjectInfo?.title || "Blog no encontrado";
	return {
		title: projectTitle,
		description: projectDescription,
		openGraph: {
			title: projectTitle,
			description: projectDescription,
			images: [
				{
					url: ProjectInfo?.image.url,
					width: 800,
					height: 600,
					alt: ProjectInfo?.image.alt,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title: projectTitle,
			description: projectDescription,
			images: [ProjectInfo?.image.url],
			site: "@siafi_unam",
		},
	};
}

/**
 * This page shows the details of a project.
 * @param props - The props of the component.
 * @returns The project detail page.
 */
const ProjectDetail = async ({ params }: ProjectDetailParams) => {
	const { slug } = params;
	const projectInfo = await getProjectBySlug(slug);

	if (!projectInfo) {
		return (
			<PageSection>
				<Image src={siafiBallSad} alt="404" width={150} />
				<div className={styles.notFoundTitleContainer}>
					<h1 className={styles.notFoundTitle}>
						Error 404 - Proyecto no encontrado
					</h1>
					<Image
						src={heartbreakDoodle}
						alt="heartbreak icon"
						width={75}
					/>
				</div>
				<p className={styles.notFoundDescription}>
					Ups! Parece que el proyecto que buscas no existe o fue
					eliminado. Por favor, verifica la URL o revisa algún otro de
					nuestros proyectos.
				</p>
				<CTAButton
					link="/proyectos"
					text="Regresar al listado de proyectos"
				/>
			</PageSection>
		);
	}

	return (
		<DetailPage
			title={projectInfo.title}
			authors={projectInfo.authors}
			coverImage={projectInfo.image}
			publicationDate={projectInfo.last_updated}
			readingTime={getReadingTimeFromPortableText(
				projectInfo.description,
			)}
			variant="project"
		>
			<PortableText
				value={projectInfo.description}
				components={PortableTextCustomComponents}
			/>
		</DetailPage>
	);
};

export default ProjectDetail;
