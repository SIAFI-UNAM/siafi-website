import React from "react";
import styles from "./ContactUs.module.css";

export default function ContactUs() {
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<div className="row">
					<div className="col-8">
						<div className={styles.contactus}>
							<h4>CONTACTANOS</h4>
							<h2>¿Quieres decirnos o proponernos algo?</h2>
							<a href="mailto:contacto@siafi-unam.org">
								contacto@siafi-unam.org
							</a>
						</div>
					</div>
					<div className={`col-4 ${styles.direction}`}>
						<h3>Encuentranos en:</h3>
						<p>
							Edificio CIA, 4to piso, conjunto sur, Circuito
							interior 3000 Col. Universidad Nacional Autónoma de
							México Coyoacán, C.P. 04510 Ciudad de México, México
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
