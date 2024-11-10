import { k } from "../../kaboomCtx";
import { SCALEFACTOR } from "../../constants";
import {
  sceneHelper,
  goToSpawnHelper,
  makeBoundariesSolidHelper,
} from "../utils";
import { setControlsHelper } from "../movement";
import gsap from "gsap";

export default async function projectScene(spawn) {
  gsap.to("#app", { opacity: 1 });
  k.loadSprite("map", "./mapProjects.png");
  k.setBackground(k.Color.fromHex("#C0AFE2"));

  const mapData = await (await fetch("./mapProjects.json")).json();
  const layers = mapData.layers;

  const map = k.add([k.sprite("map"), k.pos(0), k.scale(SCALEFACTOR)]);

  const player = k.make([
    k.sprite("dl_sprite", { anim: "idle-down" }),
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
      collisionItem: "",

      setControls() {
        setControlsHelper(k, this);
      },
    },
    "player",
  ]);

  for (const layer of layers) {
    if (layer.name === "boundaries") {
      for (const boundary of layer.objects) {
        makeBoundariesSolidHelper(k, boundary, map);

        if (boundary.name) {
          player.onCollide(boundary.name, () => {
            if (boundary.name === "doorHome") {
              k.go("home", "spawnDoorProjects");
            } else {
              player.collisionItem = boundary.name;
            }
          });

          player.onCollideEnd(boundary.name, () => {
            player.collisionItem = "";
          });
        }
      }
      continue;
    }

    goToSpawnHelper(k, layer, player, map, spawn);
  }

  sceneHelper(k, player);
}
