import { k } from "../kaboomCtx";
import { dialogueData, SCALEFACTOR } from "../constants";
import { displayDialogue, setCamScale } from "../utils";
import { mouseMovementHelper, setControlsHelper } from "../movement";

export default async function projectScene() {
  k.onKeyPress("8", () => k.go("main"));
  k.loadSprite("map", "./mapProjects.png");
  k.setBackground(k.Color.fromHex("#C0AFE2"));

  const mapData = await (await fetch("./mapProjects.json")).json();
  const layers = mapData.layers; // Layers are the different map layers (boundaries)

  const map = k.add([k.sprite("map"), k.pos(0), k.scale(SCALEFACTOR)]);

  const player = k.make([
    k.sprite("spritesheet", { anim: "idle-down" }),
    k.area({
      shape: new k.Rect(k.vec2(0, 3), 10, 10),
    }),
    k.body(),
    k.anchor("center"),
    k.pos(),
    k.scale(SCALEFACTOR),
    {
      speed: 60 * SCALEFACTOR,
      direction: "down",
      isInDialogue: false,

      setControls() {
        setControlsHelper(k, this);
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
            (map.pos.x + entity.x) * SCALEFACTOR,
            (map.pos.y + entity.y) * SCALEFACTOR
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
  mouseMovementHelper(k, player);
}
