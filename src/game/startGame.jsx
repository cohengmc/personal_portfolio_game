import menuScene from "./scenes/menu";
import homeScene from "./scenes/home";
import projectScene from "./scenes/projects";
import { k } from "../kaboomCtx";

export default function startGame() {
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

  k.loadSprite("dl_sprite", "./Deeplocal_Friend_v1.png", {
    sliceX: 4,
    sliceY: 1,
    anims: {
      "idle-down": { from: 1, to: 2, loop: true, speed: 8 },
      "walk-down": { from: 0, to: 3, loop: true, speed: 8 },
      "idle-side": { from: 1, to: 2, loop: true, speed: 8 },
      "walk-side": { from: 0, to: 3, loop: true, speed: 8 },
      "idle-up": { from: 1, to: 2, loop: true, speed: 8 },
      "walk-up": { from: 0, to: 3, loop: true, speed: 8 },
    },
  });

  // Default Map and Background Color
  k.loadSprite("map", "./mapHome.png");
  k.setBackground(k.Color.fromHex("#87CEEB"));

  // Define Scenes
  k.scene("menu", menuScene);
  k.scene("home", homeScene);
  k.scene("projects", projectScene);

  // Default Scene - go to Scene - Scene "Main"
  k.go("projects", "spawn");
}
