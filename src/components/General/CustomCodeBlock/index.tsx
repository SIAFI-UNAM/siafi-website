import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { coldarkCold } from "react-syntax-highlighter/dist/esm/styles/prism";
import styles from "./CustomCodeBlock.module.css";

interface CustomCodeBlockProps {
	/**
	 * The programming language of the code.
	 */
	language: string;
	/**
	 * The variant of the code block. The default value is "light".
	 */
	variant?: "light" | "dark";
	children: string;
}

/**
 * Custom code block component for render code blocks with syntax highlighting.
 * @param props - The props of the component.
 * @returns The custom code block component.
 */
const CustomCodeBlock = ({
	language,
	variant = "light",
	children,
}: CustomCodeBlockProps) => {
	return (
		<div className={styles.customBlock}>
			<SyntaxHighlighter
				language={language}
				style={variant === "light" ? coldarkCold : coldarkDark}
			>
				{children}
			</SyntaxHighlighter>
		</div>
	);
};

export default CustomCodeBlock;
