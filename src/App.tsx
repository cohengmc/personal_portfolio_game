import "./App.css";
import { k } from "./kaboomCtx";
import React, { useEffect, useState, useRef } from "react";
import Textbox from "./components/Textbox";
import { getDLItemTotal } from "./game/utils";
import { INTERACTIVEVOLUME } from "./constants";

function App() {
	const [collisionItem, setCollisionItem] = useState("");
	const [muted, setMuted] = useState(false);
	const [totalDLItems, setTotalDLItems] = useState(0);
	const [itemsFound, setItemsFound] = useState([]);
	const [dlCount, setDLCount] = useState(0);
	const [coins, setCoins] = useState(0);
	const [isPortfolioMessage, setIsPortfolioMessage] = useState(false);
	const [isInstructions, setIsInstructions] = useState(true);
	const [isWin, setIsWin] = useState(false);
	const audioRef = useRef(null);
	const muteButtonRef = useRef(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await getDLItemTotal();
				setTotalDLItems(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		coins === 1500 ? setIsWin(true) : "";
	}, [coins]);

	useEffect(() => {
		const intervalId = setInterval(() => {
			const hitItem = k.get("player")[0].collisionItem.toString();
			if (hitItem === "noPortfolio") {
				setIsPortfolioMessage(true);
			}
			if (hitItem !== "noPortfolio" && isPortfolioMessage) {
				setIsPortfolioMessage(false);
			}
			setCollisionItem(hitItem);
			if (
				hitItem.length > 0 &&
				hitItem !== collisionItem &&
				(hitItem.includes("DL") || hitItem.includes("COIN"))
			) {
				if (!itemsFound.includes(hitItem)) {
					const audio = new Audio("./sounds/coin.mp3");
					audio.volume = INTERACTIVEVOLUME;
					if (muted) audio.play();
					const temp = [...itemsFound];
					temp.push(hitItem);
					setItemsFound(temp);
					if (hitItem.includes("DL")) {
						setCoins(coins + 100);
						setDLCount(dlCount + 1);
					} else {
						setCoins(coins + 50);
					}
				}
			}
		}, 10);

		return () => {
			clearInterval(intervalId);
		};
	}, [collisionItem, itemsFound, coins, muted, dlCount, isPortfolioMessage]);

	// console.log(itemsFound);

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

	const handleInstructionsClick = () => {
		setIsInstructions(false);
	};

	const handleCloseWin = () => {
		setCoins(coins + 1000);
		setIsWin(false);
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
			<Textbox
				collisionItem={!collisionItem.includes("door") ? collisionItem : ""}
			/>
			<Textbox collisionItem={isPortfolioMessage ? "noPortfolio" : ""} />
			<Textbox collisionItem={isInstructions ? "instructions" : ""} />
			<Textbox collisionItem={isWin ? "win" : ""} />
			<div
				className="play-btn-container"
				style={isWin ? { display: "flex" } : { display: "none" }}
			>
				<div
					className="audio-btn-container"
					style={{ border: "2px solid black" }}
				>
					<div
						className=".ui-btn"
						style={{ fontWeight: "bolder", cursor: "pointer" }}
						onClick={handleCloseWin}
						onKeyDown={handleCloseWin}
					>
						Close Win Screen
					</div>
				</div>
			</div>
			<div
				className="play-btn-container"
				style={isInstructions ? { display: "flex" } : { display: "none" }}
			>
				<div className="audio-btn-container">
					<div
						className=".ui-btn"
						style={{ fontWeight: "bolder", cursor: "pointer" }}
						onClick={handleInstructionsClick}
						onKeyDown={handleInstructionsClick}
					>
						Play!
					</div>
				</div>
			</div>
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
				<p className="ui-text">
					{dlCount}/{totalDLItems}
				</p>
				<img
					className="deepLocalLogo"
					src="./icons/geoff_character_thiq.gif"
					alt="geoff_character icon"
				/>
			</div>
			<div className="noteAndLives">
				{/* <p className="note">Tap/Click around to move</p> */}
				<p className="note">Use the keyboard to move around</p>
				<div className="lifeContainer">
					<img
						className="heartLogo"
						src="./icons/Heart_8bit_Full.png"
						alt="heart icon"
					/>
					<img
						className="heartLogo"
						src="./icons/Heart_8bit_Full.png"
						alt="heart icon"
					/>
					<img
						className="heartLogo"
						src="./icons/Heart_8bit_Full.png"
						alt="heart icon"
					/>
				</div>
			</div>
			<div className="coinData">
				<p>{coins}</p>
				<img src="./icons/Coin1.gif" alt="heart icon" />
			</div>
		</div>
	);
}

export default App;
