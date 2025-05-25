import {
	PortableTextBlock,
	PortableTextObject,
	PortableTextSpan,
} from "sanity";

/**
 * Utility function to convert Portable Text blocks to plain text.
 * @param blocks - An array of Portable Text blocks.
 * @returns A string representing the plain text content of the blocks.
 */
export function portableTextToPlainText(
	blocks: Array<PortableTextBlock> = [],
): string {
	return blocks
		.map((block) => {
			if (block._type !== "block" || !block.children) {
				return "";
			}

			return (
				block.children as Array<PortableTextObject | PortableTextSpan>
			)
				.map((child) => child.text)
				.join("");
		})
		.join("\n\n");
}

/**
 * Utility function to create a description for meta tags from Portable Text blocks (max 150 characters).
 * @param blocks - An array of Portable Text blocks.
 * @returns A string representing the description content of the blocks.
 */
export function getDescriptionFromPortableText(
	blocks: Array<PortableTextBlock> = [],
): string {
	return portableTextToPlainText(blocks).substring(0, 150);
}

export const getReadingTimeFromPortableText = (
	blocks: Array<PortableTextBlock> = [],
) => {
	const wordsPerMinute = 200; // average reading speed
	const totalWords = blocks
		.filter((block) => block._type === "block")
		.map((block) =>
			(block.children as Array<PortableTextObject | PortableTextSpan>)
				.map((child: any) => child.text)
				.join(" "),
		)
		.join(" ")
		.split(/\s+/).length;

	const minutes = Math.ceil(totalWords / wordsPerMinute);
	return minutes;
};
