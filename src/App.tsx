import React from "react";
import "./App.css";
import { k } from "./kaboomCtx";
import { useEffect, useState, useRef } from "react";

function App() {
	const [collisionItem, setCollisionItem] = useState("");

	useEffect(() => {
		const intervalId = setInterval(() => {
			const item = k.get("player")[0].collisionItem;
			setCollisionItem(item);
		}, 10);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	console.log(collisionItem);

	return (
		<div id="ui">
			<p className="note">Tap/Click around to move</p>
			<div id="textbox-container" style={collisionItem.length > 0 ? { display: "block" } : { display: "none" }}>
				<div id="textbox">
					<p id="dialogue" className="ui-text">{collisionItem}</p>
					<div className="btn-container">
						<button type="button" id="close" className="ui-btn">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
