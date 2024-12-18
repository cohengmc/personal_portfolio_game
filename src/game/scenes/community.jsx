import { k } from "../../kaboomCtx";
import { SCALEFACTOR, BACKGROUNDCOLOR, playerData } from "../../constants";
import {
  sceneHelper,
  goToSpawnHelper,
  makeBoundariesSolidHelper,
  deepLocalSpawnHelper,
  fadeToNewScene,
} from "../utils";
import { setControlsHelper } from "../movement";
import gsap from "gsap";

export default async function communityScene(spawn, portfolio) {
  gsap.to("#app", { opacity: 1 });
  k.loadSprite("map", "./mapCommunity.png");
  k.setBackground(k.Color.fromHex(BACKGROUNDCOLOR));

  const mapData = await (await fetch("./mapCommunity.json")).json();
  const layers = mapData.layers;

  const map = k.add([k.sprite("map"), k.pos(0), k.scale(SCALEFACTOR)]);

  const player = k.make([
    k.sprite("Geoff_Sprite", { anim: "idle-down" }),
    k.area({
      shape: new k.Rect(k.vec2(0, 3), 10, 10),
    }),
    k.body(),
    k.anchor("center"),
    k.pos(),
    k.scale(SCALEFACTOR),
    {
      ...playerData,
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
            player.collisionItem = boundary.name;
            if (boundary.name === "doorWorkout") {
              fadeToNewScene(player, "workout", "spawnCommunity", portfolio);
            } else if (boundary.name === "doorPortfolio") {
              fadeToNewScene(player, "portfolio", "spawnCommunity", portfolio);
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
    deepLocalSpawnHelper(k, layer, map);
  }

  sceneHelper(k, player);
}
