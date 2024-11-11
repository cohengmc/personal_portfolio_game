// Have character stop animating when no longer moving
export function releaseHelper(player) {
  if (player.direction === "down") {
    player.play("idle-down");
    return;
  }
  if (player.direction === "up") {
    player.play("idle-up");
    return;
  }

  player.play("idle-side");
}

// Actions to do to character when they are moving
export function movementHelper(player, direction) {
  let sideOrDirection = direction;
  if (direction === "right") {
    sideOrDirection = "side";
    player.flipX = false;
  }
  if (direction === "left") {
    sideOrDirection = "side";
    player.flipX = true;
  } else {
    player.flipX = false;
  }
  player.direction = direction;

  if (player.getCurAnim().name !== `walk-${sideOrDirection}`) {
    player.play(`walk-${sideOrDirection}`);
  }
}

// Character being moved by mouse
export function mouseMovementHelper(k, player) {
  k.onMouseDown((mouseBtn) => {
    if (mouseBtn !== "left" || player.isSpawning) return;

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

// Character being moved by keyboard
export function setControlsHelper(k, player) {
  setTimeout(() => {
    // k.onButtonDown("up", () => {
    //   if (!player.isSpawning) {
    //     player.move(0, -player.speed);
    //     movementHelper(player, "up");
    //   }
    // });

    // k.onButtonDown("down", () => {
    //   if (!player.isSpawning) {
    //     player.move(0, player.speed);
    //     movementHelper(player, "down");
    //   }
    // });

    // k.onButtonDown("right", () => {
    //   if (!player.isSpawning) {
    //     player.move(player.speed, 0);
    //     movementHelper(player, "right");
    //   }
    // });

    // k.onButtonDown("left", () => {
    //   if (!player.isSpawning) {
    //     player.move(-player.speed, 0);
    //     movementHelper(player, "left");
    //   }
    // });

    k.onButtonRelease(() => {
      releaseHelper(player);
    });
    player.isSpawning = false;
  }, 800);
}
