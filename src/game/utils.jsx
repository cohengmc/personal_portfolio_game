import { SCALEFACTOR } from "../constants";
import { mouseMovementHelper } from "./movement";

// Scale sizing based on device
export function setCamScale(k) {
  const resizeFactor = k.width() / k.height();
  if (resizeFactor < 1) {
    k.camScale(k.vec2(1));
    return;
  }

  k.camScale(k.vec2(1.5));
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
  mouseMovementHelper(k, player);
}
