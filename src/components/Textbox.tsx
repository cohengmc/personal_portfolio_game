import React from "react";
import { dialogueData } from "../constants";

const Textbox = ({ collisionItem }: { collisionItem: string }) => {
	return (
		<div
			style={
				collisionItem.length > 0 ? { display: "block" } : { display: "none" }
			}
		>
			<div className="textbox">
				<p
					className="ui-text"
					dangerouslySetInnerHTML={{ __html: dialogueData[collisionItem] }}
				/>
			</div>
		</div>
	);
};

export default Textbox;
