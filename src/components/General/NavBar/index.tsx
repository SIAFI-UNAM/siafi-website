"use client";
import React, { useState, useEffect } from "react";
import styles from "./NavBar.module.css";
import Image from "next/image";
import { logoSIAFI } from "@/image-paths";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";
import { usePathname } from "next/navigation";

/**
 * Component for the navigation bar of the website, renders the version for mobile and desktop.
 * @returns The navigation bar component.
 */
export default function NavBar() {
	const [navbarOpen, setNavbarOpen] = useState(false);

	const pathname = usePathname();

	const handleMobileMenu = () => {
		setNavbarOpen(!navbarOpen);
	};

	const navbarLinks = [
		{ url: "/nosotros", title: "Nosotros" },
		{ url: "/blog", title: "Blog" },
		{ url: "/proyectos", title: "Proyectos" },
		{ url: "/#contact", title: "Contacto" },
	];

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
						{navbarLinks.map((link, index) => (
							<li key={index}>
								<Link
									href={link.url}
									className={
										link.url === pathname
											? styles.active
											: ""
									}
								>
									{link.title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div
				className={`container ${styles.mobileNavbar} ${
					navbarOpen ? styles.active : ""
				}`}
			>
				<ul className={`${styles.navbarLinksList}`}>
					{navbarLinks.map((link, index) => (
						<li key={index}>
							<Link
								href={link.url}
								className={
									link.url === pathname ? styles.active : ""
								}
							>
								{link.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
