import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { dialogueData, scaleFactor } from "./constants";
import {
  displayDialogue,
  setCamScale,
  releaseHelper,
  movementHelper,
} from "./utils";
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

k.loadSprite("map", "./mapHome.png");
k.setBackground(k.Color.fromHex("#87CEEB"));

// Define MAIN Scene
k.scene("main", async () => {
  k.loadSprite("map", "./mapHome.png");
  k.setBackground(k.Color.fromHex("#87CEEB"));
  const mapData = await (await fetch("./mapHome.json")).json();
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
      speed: 60 * scaleFactor,
      direction: "down",
      isInDialogue: false,
      //movement: [0, 0, 0, 0], // Up, Down, Left, Right // DIAGANOL

      setControls() {
        k.onButtonDown("up", () => {
          player.move(0, -this.speed);
          movementHelper(player, "up");
        });

        k.onButtonDown("down", () => {
          player.move(0, this.speed);
          movementHelper(player, "down");
        });

        k.onButtonDown("right", () => {
          player.move(this.speed, 0);
          movementHelper(player, "right");
        });

        k.onButtonDown("left", () => {
          player.move(-this.speed, 0);
          movementHelper(player, "left");
        });

        // DIAGANOL
        // k.onButtonPress("up", () => {
        //   this.movement[0] = 1;
        // });

        // k.onButtonPress("down", () => {
        //   this.movement[1] = 1;
        // });

        // k.onButtonPress("left", () => {
        //   this.movement[2] = 1;
        // });

        // k.onButtonPress("right", () => {
        //   this.movement[3] = 1;
        // });

        k.onButtonRelease(() => {
          releaseHelper(this);
        });
      },
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

            displayDialogue(dialogueData[boundary.name], () => {
              player.isInDialogue = false;
            });
          });
        }
      }
      continue;
    }

    if (layer.name === "spawnpoint") {
      for (const entity of layer.objects) {
        if (entity.name === "spawn") {
          player.pos = k.vec2(
            (map.pos.x + entity.x) * scaleFactor,
            (map.pos.y + entity.y) * scaleFactor
          );
          k.add(player);
        }
      }
    }
  }

  setCamScale(k);

  k.onResize(() => {
    setCamScale(k);
  });

  k.onUpdate(() => {
    k.camPos(player.pos.x, player.pos.y + 100);
  });

  player.setControls();

  k.onMouseDown((mouseBtn) => {
    if (mouseBtn !== "left" || player.isInDialogue) return;

    const worldMousePos = k.toWorld(k.mousePos());
    player.moveTo(worldMousePos, player.speed);

    const mouseAngle = player.pos.angle(worldMousePos);

    const lowerBound = 50;
    const upperBound = 125;

    if (
      mouseAngle > lowerBound &&
      mouseAngle < upperBound &&
      player.getCurAnim().name !== "walk-up"
    ) {
      movementHelper(player, "up");
      return;
    }

    if (
      mouseAngle < -lowerBound &&
      mouseAngle > -upperBound &&
      player.getCurAnim().name !== "walk-down"
    ) {
      movementHelper(player, "down");
      return;
    }

    if (Math.abs(mouseAngle) > upperBound) {
      movementHelper(player, "right");
      return;
    }

    if (Math.abs(mouseAngle) < lowerBound) {
      movementHelper(player, "left");
      return;
    }
  });

  k.onMouseRelease(() => {
    releaseHelper(player);
  });
});

// Define PROJECTS Scene
k.scene("projects", async () => {
  k.loadSprite("map", "./mapProjects.png");
  k.setBackground(k.Color.fromHex("#C0AFE2"));
  const mapData = await (await fetch("./mapProjects.json")).json();
  const layers = mapData.layers; // Layers are the different map layers (boundaries)

  const map = k.add([k.sprite("map"), k.pos(0), k.scale(scaleFactor)]);

  const player = k.make([
    k.sprite("spritesheet", { anim: "idle-down" }),
    k.area({
      shape: new k.Rect(k.vec2(0, 3), 10, 10),
    }),
    k.body(),
    k.anchor("center"),
    k.pos(),
    k.scale(scaleFactor),
    {
      speed: 60 * scaleFactor,
      direction: "down",
      isInDialogue: false,

      setControls() {
        k.onButtonDown("up", () => {
          player.move(0, -this.speed);
          movementHelper(player, "up");
        });

        k.onButtonDown("down", () => {
          player.move(0, this.speed);
          movementHelper(player, "down");
        });

        k.onButtonDown("right", () => {
          player.move(this.speed, 0);
          movementHelper(player, "right");
        });

        k.onButtonDown("left", () => {
          player.move(-this.speed, 0);
          movementHelper(player, "left");
        });

        k.onButtonRelease(() => {
          releaseHelper(this);
        });
      },
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

            displayDialogue(dialogueData[boundary.name], () => {
              player.isInDialogue = false;
            });
          });
        }
      }
      continue;
    }

    if (layer.name === "spawnpoint") {
      for (const entity of layer.objects) {
        if (entity.name === "spawn") {
          player.pos = k.vec2(
            (map.pos.x + entity.x) * scaleFactor,
            (map.pos.y + entity.y) * scaleFactor
          );
          k.add(player);
        }
      }
    }
  }

  setCamScale(k);

  k.onResize(() => {
    setCamScale(k);
  });

  k.onUpdate(() => {
    k.camPos(player.pos.x, player.pos.y + 100);
  });

  player.setControls();

  k.onMouseDown((mouseBtn) => {
    if (mouseBtn !== "left" || player.isInDialogue) return;

    const worldMousePos = k.toWorld(k.mousePos());
    player.moveTo(worldMousePos, player.speed);

    const mouseAngle = player.pos.angle(worldMousePos);

    const lowerBound = 50;
    const upperBound = 125;

    if (
      mouseAngle > lowerBound &&
      mouseAngle < upperBound &&
      player.getCurAnim().name !== "walk-up"
    ) {
      movementHelper(player, "up");
      return;
    }

    if (
      mouseAngle < -lowerBound &&
      mouseAngle > -upperBound &&
      player.getCurAnim().name !== "walk-down"
    ) {
      movementHelper(player, "down");
      return;
    }

    if (Math.abs(mouseAngle) > upperBound) {
      movementHelper(player, "right");
      return;
    }

    if (Math.abs(mouseAngle) < lowerBound) {
      movementHelper(player, "left");
      return;
    }
  });

  k.onMouseRelease(() => {
    releaseHelper(player);
  });
});

// Default Scene - go to Scene - Scene "Main"
k.go("projects");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
