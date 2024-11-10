import SimplePage from "@/components/General/SimplePage";
import React from "react";
import Spinner from "react-bootstrap/Spinner";

const loadingBlog = () => {
	return (
		<SimplePage>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					height: "50vh",
				}}
			>
				<Spinner animation="grow" variant="primary" />
			</div>
		</SimplePage>
	);
};

export default loadingBlog;
