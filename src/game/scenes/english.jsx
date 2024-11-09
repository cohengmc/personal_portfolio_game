import { k } from "../../kaboomCtx";
import { SCALEFACTOR, BACKGROUNDCOLOR } from "../../constants";
import {
  sceneHelper,
  goToSpawnHelper,
  makeBoundariesSolidHelper,
  deepLocalSpawnHelper,
} from "../utils";
import { setControlsHelper } from "../movement";

export default async function englishScene(spawn) {
  k.loadSprite("map", "./mapImmersingEnglish.png");
  k.setBackground(k.Color.fromHex(BACKGROUNDCOLOR));

  const mapData = await (await fetch("./mapImmersingEnglish.json")).json();
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
            } else if (boundary.name === "doorPortfolio") {
              k.go("portfolio", "spawnEnglish");
            } else if (boundary.name === "doorWorkout") {
              k.go("workout", "spawnEnglish");
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
    deepLocalSpawnHelper(k, layer, map);
  }

  sceneHelper(k, player);
}
