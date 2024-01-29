import CTAButton from "@/components/General/CTAButton";
import PageSection from "@/components/General/PageSection";
import React from "react";

export default function OurProjects() {
	return (
		<PageSection>
			<div className="row">
				<div className="col-12 col-md-4">
					<div>
						<h2>Sorprendete con nuestros proyectos</h2>
						<p>SIAFI tiene distintos proyectos con los que ...</p>
						<CTAButton link="/proyectos" text="Ver proyectos" />
					</div>
				</div>
				<div className="col-12 col-md-8">
					{/* Imagenes de proyectos */}
				</div>
			</div>
		</PageSection>
	);
}
