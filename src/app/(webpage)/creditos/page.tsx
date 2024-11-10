import React from "react";
import Image from "next/image";
import SimplePage from "@/components/General/SimplePage";
import { chrisleyMemoji } from "@/image-paths";
import styles from "./creditos.module.css";

const PageCredits = () => {
	return (
		<SimplePage title="Créditos">
			<div className={styles.creditsPage}>
				<h2>Desarrollo</h2>
				<div className={styles.developerInfo}>
					<Image
						src={chrisleyMemoji}
						alt="Christian Leyva Memoji"
						width={200}
						height={200}
					/>
					<p>
						Esta página fue desarrollada con ❤️ por{" "}
						<a href="https://chrisley.dev/" target="__blank">
							Christian Leyva
						</a>{" "}
						antiguo miembro de SIAFI.
					</p>
				</div>
				<p>
					Si lo deseas o necesitas, puedes contactarme en mi correo 📧{" "}
					<a href="mailto:chris@chrisley.dev">chris@chrisley.dev</a> .
				</p>
				<p>
					El código fuente de este proyecto es{" "}
					<strong>open source</strong> y puedes acceder a el en
					nuestro{" "}
					<a
						href="https://github.com/SIAFI-UNAM/siafi-website"
						target="__blank"
					>
						repositorio
					</a>
					. 🤓
				</p>
				<h2>Inspiración</h2>
				<p>
					El sitio web esta inspirado en el diseño{" "}
					<a
						href="https://www.figma.com/community/file/1110086112339219385/influencer-meet-tech"
						target="__blank"
					>
						Influencer Meet Tech
					</a>{" "}
					creado por{" "}
					<a href="https://www.figma.com/@andikan" target="__blank">
						Andikan Bassey
					</a>{" "}
					y otros diseñadores (el diseño esta licenciado sobre{" "}
					<a
						href="https://creativecommons.org/licenses/by/4.0/"
						target="__blank"
					>
						CC BY 4.0
					</a>
					).
				</p>
				<h2>Assets Utilizados</h2>
				<ul>
					<li>
						<a href="https://www.fffuel.co/dddoodle/">dddoodle</a>
					</li>
					<li>
						<a
							href="https://iconos8.es/illustrations/style--3d-casual-life"
							target="__blank"
						>
							Casual life 3D Assets
						</a>
					</li>
				</ul>
			</div>
		</SimplePage>
	);
};

export default PageCredits;
