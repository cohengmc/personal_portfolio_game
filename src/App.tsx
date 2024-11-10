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
			<audio ref={audioRef}>
				<source src="./sounds/lofi.mp3" type="audio/mpeg" />
				<track kind="captions" />
			</audio>
			<Textbox collisionItem={collisionItem} />
			<div className="mute">
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
			</div>

			<div className="gameDataBox deepLocalData">
				<p className="ui-text">Hey</p>
				<img
					className="deepLocalLogo"
					src="./icons/Deeplocal_Logo.gif"
					alt="dl icon"
				/>
			</div>
			<div className="noteAndLives">
				<p className="note">Tap/Click around to move</p>
				<img
					className="heartLogo"
					src="./icons/Heart_8bit_Full.png"
					alt="heart icon"
				/>
			</div>
			<div className="coinData">
				<img src="./icons/Coin1.gif" alt="heart icon" />
			</div>
		</div>
	);
}

export default App;
