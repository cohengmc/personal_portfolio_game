import menuScene from "./scenes/menu";
import homeScene from "./scenes/home";
import projectScene from "./scenes/projects";
import englishScene from "./scenes/english";
import portfolioScene from "./scenes/portfolio";
import workoutScene from "./scenes/workout";
import communityScene from "./scenes/community";
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
      "idle-down": { from: 0, to: 3, loop: true, speed: 8 },
      "walk-down": { from: 0, to: 3, loop: true, speed: 8 },
      "idle-side": { from: 0, to: 3, loop: true, speed: 8 },
      "walk-side": { from: 0, to: 3, loop: true, speed: 8 },
      "idle-up": { from: 0, to: 3, loop: true, speed: 8 },
      "walk-up": { from: 0, to: 3, loop: true, speed: 8 },
    },
  });

  k.loadSprite("dl_logo", "./Deeplocal_Logo.png", {
    sliceX: 10,
    sliceY: 1,
    anims: {
      "spin-logo": { from: 0, to: 9, loop: true, speed: 12 },
    },
  });

  k.loadSprite("Geoff_Sprite", "./Geoff_Sprite.png", {
    sliceX: 16,
    sliceY: 1,
    anims: {
      "idle-down": { from: 12, to: 13, loop: true, speed: 2 },
      "walk-down": { from: 0, to: 3, loop: true, speed: 8 },
      "idle-side": { from: 4, to: 5, loop: true, speed: 2 },
      "walk-side": { from: 4, to: 7, loop: true, speed: 8 },
      "idle-up": { from: 14, to: 15, loop: true, speed: 2 },
      "walk-up": { from: 8, to: 11, loop: true, speed: 8 },
    },
  });

  k.loadSprite("Cuberover_Sprite", "./Cuberover_Sprite.png", {
    sliceX: 16,
    sliceY: 1,
    anims: {
      "idle-down": { from: 14, to: 15, loop: true, speed: 2 },
      "walk-down": { from: 4, to: 5, loop: true, speed: 4 },
      "idle-side": { from: 10, to: 11, loop: true, speed: 2 },
      "walk-side": { from: 8, to: 9, loop: true, speed: 4 },
      "idle-up": { from: 12, to: 13, loop: true, speed: 2 },
      "walk-up": { from: 6, to: 7, loop: true, speed: 4 },
    },
  });

  // Default Map and Background Color
  k.loadSprite("map", "./mapHome.png");
  k.setBackground(k.Color.fromHex("#87CEEB"));

  // Define Scenes
  k.scene("menu", menuScene);
  k.scene("home", homeScene);
  k.scene("projects", projectScene);
  k.scene("english", englishScene);
  k.scene("workout", workoutScene);
  k.scene("community", communityScene);
  k.scene("portfolio", portfolioScene);

  // Default Scene - go to Scene - Scene "Main"
  // k.go("english", "spawnDoor");
  // k.go("home", "spawn");
  k.go("workout", "spawnEnglish");
}
