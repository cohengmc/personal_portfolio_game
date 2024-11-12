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

export default async function englishScene(spawn, portfolio) {
  gsap.to("#app", { opacity: 1 });
  k.loadSprite("map", "./mapImmersingEnglish.png");
  k.setBackground(k.Color.fromHex(BACKGROUNDCOLOR));

  const mapData = await (await fetch("./mapImmersingEnglish.json")).json();
  const layers = mapData.layers;

  const map = k.add([k.sprite("map"), k.pos(0), k.scale(SCALEFACTOR)]);

  const portfolioItems = 2;

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
            if (boundary.name === "doorHome") {
              // fadeToNewScene(player, "home", "spawnDoorProjects");
            } else if (boundary.name === "doorPortfolio" && portfolio) {
              fadeToNewScene(player, "portfolio", "spawnEnglish", portfolio);
            } else if (boundary.name === "doorPortfolio" && !portfolio) {
              player.collisionItem = "noPortfolio"
            } else if (boundary.name === "doorWorkout") {
              fadeToNewScene(player, "workout", "spawnEnglish", portfolio);
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
