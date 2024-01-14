import React from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import { logoSIAFI } from "@/image-paths";
import Link from "next/link";

export default function NavBar() {
	return (
		<div className={styles.navbarContainer}>
			<div className={`container ${styles.navbarContent}`}>
				<div className={styles.logo}>
					<Link href="/">
						<Image src={logoSIAFI} alt="logo" width={100} />
					</Link>
				</div>
				<div className={styles.navbarLinks}>
					<ul>
						<li>
							<Link href={"#"}>Nosotros</Link>
						</li>
						<li>
							<Link href={"#"}>Blog</Link>
						</li>
						<li>
							<Link href={"#"}>Proyectos</Link>
						</li>
						<li>
							<Link href={"#"}>Contacto</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
