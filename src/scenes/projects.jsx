import { k } from "../kaboomCtx";
import { dialogueData, scaleFactor } from "../constants";
import {
  displayDialogue,
  setCamScale,
  releaseHelper,
  movementHelper,
} from "../utils";

export default async function projectScene() {
  k.onKeyPress("8", () => k.go("main"));
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
}
