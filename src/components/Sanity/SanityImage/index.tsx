"use client";
import Image from "next/image";
import type { SanityImageSource } from "@sanity/asset-utils";
import { useNextSanityImage } from "next-sanity-image";
import sanityConfig from "../../../../sanity.config";
import styles from "./SanityImage.module.css";

interface SanityImageProps {
	asset: SanityImageSource;
	alt?: string;
}

/**
 * Component for displaying a Sanity image from a Portable Text field.
 * @param props - The props of the component.
 * @returns A NextJS Image with the Image from Sanity.
 */
export const SanityImage = ({ asset, alt }: SanityImageProps) => {
	const imageProps = useNextSanityImage(sanityConfig, asset);

	return (
		<div className={styles.imageContainer}>
			<Image
				alt={alt || "Blog Image from sanity"}
				{...imageProps}
				loading="lazy"
				className={styles.image}
			/>
			{alt && <p className={styles.imageCaption}>{alt}</p>}
		</div>
	);
};
