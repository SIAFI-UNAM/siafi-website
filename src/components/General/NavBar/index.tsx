"use client";
import React, { useState } from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import { logoSIAFI } from "@/image-paths";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

export default function NavBar() {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const handleMobileMenu = () => {
		setNavbarOpen(!navbarOpen);
	};

	const navbarLinks = (
		<>
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
		</>
	);

	return (
		<div className={styles.navbarContainer}>
			<div className={`container ${styles.navbarContent}`}>
				<div className={`${styles.logo} ${styles["hvr-pop"]}`}>
					<Link href="/">
						<Image src={logoSIAFI} alt="logo" width={100} />
					</Link>
				</div>
				<div className={styles.navbarLinks}>
					<IoMenu
						className={`${styles.menuIcon} ${
							navbarOpen ? styles.active : ""
						}`}
						onClick={handleMobileMenu}
					/>
					<ul className={`${styles.navbarLinksList}`}>
						{navbarLinks}
					</ul>
				</div>
			</div>
			<div
				className={`container ${styles.mobileNavbar} ${
					navbarOpen ? styles.active : ""
				}`}
			>
				<ul className={`${styles.navbarLinksList}`}>{navbarLinks}</ul>
			</div>
		</div>
	);
}
