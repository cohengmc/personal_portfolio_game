import { SCALEFACTOR, CAMSCALE, INTERACTIVEVOLUME } from "../constants";
import { mouseMovementHelper } from "./movement";
import gsap from "gsap";
import { k } from "../kaboomCtx";

// Scale sizing based on device
export function setCamScale(k) {
  const resizeFactor = k.width() / k.height();
  if (resizeFactor < 1) {
    k.camScale(k.vec2(CAMSCALE));
    return;
  }

  k.camScale(k.vec2(CAMSCALE * 1.5));
}

export function goToSpawnHelper(k, layer, player, map, spawn) {
  if (layer.name === "spawnpoint") {
    for (const entity of layer.objects) {
      if (entity.name === spawn) {
        player.pos = k.vec2(
          (map.pos.x + entity.x) * SCALEFACTOR,
          (map.pos.y + entity.y) * SCALEFACTOR
        );
        k.add(player);
      }
    }
  }
}

export function makeBoundariesSolidHelper(k, boundary, map) {
  map.add([
    k.area({
      shape: new k.Rect(k.vec2(0), boundary.width, boundary.height),
    }),
    k.body({ isStatic: true }),
    k.pos(boundary.x, boundary.y),
    boundary.name,
  ]);
}

export function sceneHelper(k, player) {
  setCamScale(k);

  k.onResize(() => {
    setCamScale(k);
  });

  k.onUpdate(() => {
    k.camPos(player.pos.x, player.pos.y + 100);
  });

  player.setControls();
  // mouseMovementHelper(k, player);
}

export function deepLocalSpawnHelper(k, layer, map) {
  if (layer.name === "deeplocalSpawns") {
    for (const entity of layer.objects) {
      k.add([
        k.sprite("dl_logo", { anim: "spin-logo" }),
        k.area({
          shape: new k.Rect(k.vec2(0, 3), 0, 0),
        }),
        k.body(),
        k.anchor("center"),
        k.pos(
          k.vec2(
            (map.pos.x + entity.x) * SCALEFACTOR + 1 * SCALEFACTOR,
            (map.pos.y + entity.y) * SCALEFACTOR - 12 * SCALEFACTOR
          )
        ),
        k.scale(SCALEFACTOR * 0.75),
        "logo",
      ]);
    }
  }
}

export function fadeToNewScene(player, scene, spawnName) {
  player.isSpawning = true;
  gsap.to("#app", { opacity: 0 });
  k.play("levelUp", { volume: INTERACTIVEVOLUME });
  setTimeout(() => {
    k.go(scene, spawnName);
  }, 2000);
}

export async function getDLItemTotal() {
  let total = 0;
  await fetch("mapImmersingEnglish.json")
    .then((response) => response.json())
    .then((data) => {
      // Access data from the parsed JSON object
      // console.log(data.layers);
      for (const layer in data.layers) {
        if (data.layers[layer].name === "deeplocalSpawns") {
          total += data.layers[layer].objects.length;
        }
      }
    })
    .catch((error) => {
      console.error("Error fetching or parsing JSON:", error);
    });

    await fetch("mapCommunity.json")
    .then((response) => response.json())
    .then((data) => {
      // Access data from the parsed JSON object
      // console.log(data.layers);
      for (const layer in data.layers) {
        if (data.layers[layer].name === "deeplocalSpawns") {
          total += data.layers[layer].objects.length;
        }
      }
    })
    .catch((error) => {
      console.error("Error fetching or parsing JSON:", error);
    });

    await fetch("mapHome.json")
    .then((response) => response.json())
    .then((data) => {
      // Access data from the parsed JSON object
      // console.log(data.layers);
      for (const layer in data.layers) {
        if (data.layers[layer].name === "deeplocalSpawns") {
          total += data.layers[layer].objects.length;
        }
      }
    })
    .catch((error) => {
      console.error("Error fetching or parsing JSON:", error);
    });

    await fetch("mapPortfolio.json")
    .then((response) => response.json())
    .then((data) => {
      // Access data from the parsed JSON object
      // console.log(data.layers);
      for (const layer in data.layers) {
        if (data.layers[layer].name === "deeplocalSpawns") {
          total += data.layers[layer].objects.length;
        }
      }
    })
    .catch((error) => {
      console.error("Error fetching or parsing JSON:", error);
    });

    await fetch("mapWorkoutTracker.json")
    .then((response) => response.json())
    .then((data) => {
      // Access data from the parsed JSON object
      // console.log(data.layers);
      for (const layer in data.layers) {
        if (data.layers[layer].name === "deeplocalSpawns") {
          total += data.layers[layer].objects.length;
        }
      }
    })
    .catch((error) => {
      console.error("Error fetching or parsing JSON:", error);
    });

  return total;
}
