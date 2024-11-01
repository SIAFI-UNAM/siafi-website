import CustomCodeBlock from "@/components/General/CustomCodeBlock";
import { SanityImage } from "../SanityImage";
import { PortableTextReactComponents } from "@portabletext/react";

/**
 * This object contains custom components for the Portable Text React Components.
 * This allow us to render in different types of blocks from the same PortableText field (e.g. Images).
 */
const PortableTextCustomComponents: Partial<PortableTextReactComponents> = {
	types: {
		image: ({ value }) => {
			return <SanityImage {...value} />;
		},
		code: ({ value }) => {
			return (
				<CustomCodeBlock language={value.language}>
					{value.code}
				</CustomCodeBlock>
			);
		},
	},
};

export default PortableTextCustomComponents;
