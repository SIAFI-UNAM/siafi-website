import {
	PortableTextBlock,
	PortableTextObject,
	PortableTextSpan,
} from "sanity";

export function portableTextToPlainText(
	blocks: Array<PortableTextBlock> = []
): string {
	return (
		blocks
			// loop through each block
			.map((block) => {
				// if it's not a text block with children,
				// return nothing
				if (block._type !== "block" || !block.children) {
					return "";
				}
				// loop through the children spans, and join the
				// text strings
				return (
					block.children as Array<
						PortableTextObject | PortableTextSpan
					>
				)
					.map((child) => child.text)
					.join("");
			})
			// join the paragraphs leaving split by two linebreaks
			.join("\n\n")
	);
}

export function getDescriptionFromPortableText(
	blocks: Array<PortableTextBlock> = []
): string {
	return (
		blocks
			// loop through each block
			.map((block) => {
				// if it's not a text block with children,
				// return nothing
				if (block._type !== "block" || !block.children) {
					return "";
				}
				// loop through the children spans, and join the
				// text strings
				return (
					block.children as Array<
						PortableTextObject | PortableTextSpan
					>
				)
					.map((child) => child.text)
					.join("");
			})
			// join the paragraphs leaving split by two linebreaks
			.join(" ")
			.substring(0, 150)
	);
}

export const getReadingTimeFromPortableText = (
	blocks: Array<PortableTextBlock> = []
) => {
	const wordsPerMinute = 200; // average reading speed
	const totalWords = blocks
		.filter((block) => block._type === "block")
		.map((block) =>
			(block.children as Array<PortableTextObject | PortableTextSpan>)
				.map((child: any) => child.text)
				.join(" ")
		)
		.join(" ")
		.split(/\s+/).length;

	const minutes = Math.ceil(totalWords / wordsPerMinute);
	return minutes;
};
