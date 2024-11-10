import "./App.css";
import { k } from "./kaboomCtx";
import React, { useEffect, useState, useRef } from "react";
import Textbox from "./components/Textbox";

function App() {
	const [collisionItem, setCollisionItem] = useState("");
	const [muted, setMuted] = useState(false);
	const audioRef = useRef(null);
	const muteButtonRef = useRef(null);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCollisionItem(k.get("player")[0].collisionItem);
		}, 10);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	console.log(collisionItem);

	const playAudio = () => {
		setMuted(!muted);
		if (muted) {
			if (audioRef.current !== null) audioRef.current.pause();
			k.volume(0);
		} else {
			if (audioRef.current !== null) {
				audioRef.current.play();
				audioRef.current.volume = 0.05;
				audioRef.current.loop = true;
			}
			k.volume(1);
		}
	};

	const handleBlur = () => {
		if (muteButtonRef.current !== null) muteButtonRef.current.blur();
	};

	return (
		<div id="ui">
			<p className="note">Tap/Click around to move</p>
			<audio ref={audioRef}>
				<source src="./sounds/lofi.mp3" type="audio/mpeg" />
				<track kind="captions" />
			</audio>
			<Textbox collisionItem={collisionItem} />
			<div
				ref={muteButtonRef}
				className="audio-btn-container"
				onClick={playAudio}
				onKeyDown={playAudio}
				onBlur={handleBlur}
			>
				<img
					className="icon"
					src={!muted ? "./icons/muted.png" : "./icons/audio.png"}
					alt="audioIcon"
				/>
			</div>
			<div style={{ display: "block" }}>
				<div className="gameDataBox">
					<div style={{display: "flex", alignItems: "center"}}>
						<p className="ui-text">Hey</p>
						<img src="./icons/Deeplocal_Logo.gif" alt="dl icon" style={{width: "4rem"}}/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
