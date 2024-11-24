import menuScene from "./scenes/menu";
import homeScene from "./scenes/home";
import projectScene from "./scenes/projects";
import englishScene from "./scenes/english";
import portfolioScene from "./scenes/portfolio";
import workoutScene from "./scenes/workout";
import communityScene from "./scenes/community";
import { k } from "../kaboomCtx";
import loadSriteCharacters from "./loadSprites";

export default function startGame() {
  // Pulling character graphics/ animations from spritesheet
  loadSriteCharacters();

  // Load sounds
  k.loadSound("coin", "./sounds/coin.mp3");
  k.loadSound("levelUp", "./sounds/levelUp.mp3");

  k.volume(0);

  // music.paused = true;

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
  // k.go("english", "spawnDoor", false);
  // k.go("home", "spawn",false);
  // k.go("workout", "spawnEnglish", false);
  // k.go("community", "spawnWorkout", false);
  k.go("portfolio", "spawnCommunity", false)
}
