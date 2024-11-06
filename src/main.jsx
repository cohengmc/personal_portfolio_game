import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { scaleFactor } from "./constants";
import { displayDialogue } from "./utils";
import { k } from "./kaboomCtx";


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

k.loadSprite("map", "./map.png");

k.setBackground(k.Color.fromHex("#87CEEB"));

//Define Scene
k.scene("main", async () => {
  const mapData = await (await fetch("./map.json")).json();
  const layers = mapData.layers; // Layers are the different map layers (boundaries)

  // Game Object (objects: players, props, etc. object that contains components: positions, area, sprite, etc.)
  // Make allows you to make a game object but not display it on the screen
  // Add adds it to screen.
  // So either Make -> Add or just Add
  //.sprite -> // Sepcificy key you want sprite to display
  //.pos -> pos the game object will have on screen if it is displayed
  //.scalre -> scale up because pixel art is small and we want to make it bigger
  const map = k.add([k.sprite("map"), k.pos(0), k.scale(scaleFactor)]);

  const player = k.make([
    // passing the spritesheet with a default animation (specified above in ./loadSprite)
    k.sprite("spritesheet", { anim: "idle-down" }),

    //.area -> creates hitbox for our game object (in this case player)
    k.area({
      //default is rough shape of sprite but we want more specificity
      shape: new k.Rect(k.vec2(0, 3), 10, 10),
    }),
    //.body -> amkes it a tangible physics object
    k.body(),
    //.anchor-> have x,y correspond to center as opposed to top left
    k.anchor("center"),
    k.pos(),
    k.scale(scaleFactor),

    //hold properties within an game object by passing in an object with any properties you want. so player.speed = 250 but we can make anything like adding hand: "left" then player.hand would be left
    {
      speed: 250,
      direction: "down",
      isInDialogue: false,
    },
    // tag for this game object - way to identify the game object
    "player",
  ]);

  for (const layer of layers) {
    if (layer.name === "boundaries") {
      for (const boundary of layer.objects) {
        map.add([
          k.area({
            shape: new k.Rect(k.vec2(0), boundary.width, boundary.height),
          }),
          k.body({ isStatic: true }),
          k.pos(boundary.x, boundary.y),
          boundary.name,
        ]);

        if (boundary.name) {
          player.onCollide(boundary.name, () => {
            player.isInDialogue = true;

            displayDialogue("TODO", () => {
              player.isInDialogue = false;
            });
          });
        }
      }
      //continue;
    }

    if (layer.name === "spawnpoint") {
      for (const entity of layer.objects) {
        if (entity.name === "player") {
          player.pos = k.vec2(
            (map.pos.x + entity.x) * scaleFactor,
            (map.pos.y + entity.y) * scaleFactor
          );
          k.add(player);
        }
      }
    }
  }

  k.onUpdate(() => {
    k.camPos(player.pos.x, player.pos.y + 100);
  });
});

// Default Scene - go to Scene - Scene "Main"
k.go("main");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
