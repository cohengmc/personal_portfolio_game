import React from "react";

const Hashtags = ({ hashtags }: { hashtags: string[] }) => {
	return (
		<div>
			{hashtags.map((item, index) => (
				<span className="hashtags" key={`index${item}`}>
					#{item.toUpperCase()}{" "}
				</span>
			))}
		</div>
	);
};

export default Hashtags;
