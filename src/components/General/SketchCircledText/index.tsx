"use client";
import React, { useRef, useEffect, useState } from "react";

type Props = {
	children: React.ReactNode;
};

export default function SketchCircledText({ children }: Props) {
	const [svgSize, setSvgSize] = useState({ width: 0, height: 0 });
	const svgRef = useRef<SVGSVGElement>(null);

	useEffect(() => {
		if (svgRef.current) {
			const bbox = svgRef.current.getBBox();
			setSvgSize({ width: bbox.width + 10, height: bbox.height + 10 }); // Adding some padding
		}
	}, [children]);

	return (
		<svg
			ref={svgRef}
			width={svgSize.width}
			height={svgSize.height}
			viewBox={`0 0 ${svgSize.width} ${svgSize.height}`}
		>
			<circle
				cx={svgSize.width / 2}
				cy={svgSize.height / 2}
				r={Math.max(svgSize.width, svgSize.height) / 2}
				stroke="black"
				fill="none"
			/>
			<foreignObject width="100%" height="100%">
				<div
					xmlns="http://www.w3.org/1999/xhtml"
					style={{
						textAlign: "center",
						lineHeight: "1.5",
						padding: "5px",
					}}
				>
					{children}
				</div>
			</foreignObject>
		</svg>
	);
}
