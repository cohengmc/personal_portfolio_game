import { useState } from "react";
import menuScene from "./scenes/menu";
import homeScene from "./scenes/home";
import projectScene from "./scenes/projects";
import "./App.css"
import { k } from "./kaboomCtx";

// Pulling character graphics/ animations from spritesheet
k.loadSprite("spritesheet", "./spritesheet.png", {
  sliceX: 39,
  sliceY: 31,
  anims: {
    "idle-down": 936,
    "walk-down": { from: 936, to: 939, loop: true, speed: 8 },
    "idle-side": 975,
    "walk-side": { from: 975, to: 978, loop: true, speed: 8 },
    "idle-up": 1014,
    "walk-up": { from: 1014, to: 1017, loop: true, speed: 8 },
  },
});

// Default Map and Background Color
k.loadSprite("map", "./mapHome.png");
k.setBackground(k.Color.fromHex("#87CEEB"));

// Define Scenes
k.scene("menu", menuScene);
k.scene("main", homeScene);
k.scene("projects", projectScene);

// Default Scene - go to Scene - Scene "Main"
k.go("projects");

function App() {
  return (
    <div id="ui">
      <p className="note">Tap/Click around to move</p>
      <div id="textbox-container" style={{display: "none"}}>
        <div id="textbox">
          <p id="dialogue" className="ui-text"></p>
          <div className="btn-container">
            <button id="close" className="ui-btn">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
