import React from "react";
import "./App.css";
import { k } from "./kaboomCtx";
import { useEffect, useState } from "react";
import Textbox from "./components/Textbox";

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
			<Textbox collisionItem={collisionItem} />
			{/* <div className="btn-container">
						<button type="button" id="close" className="ui-btn">
							Close
						</button>
					</div> */}
		</div>
	);
}

export default App;
