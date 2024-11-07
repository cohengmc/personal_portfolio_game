import kaplay from "kaplay";

export const k = kaplay({
  global: false,
  touchToMouse: true,
  canvas: document.getElementById("game"),
  // debug: false,
  buttons: {
    up: {
      keyboard: ["w", "up"],
    },
    down: {
      keyboard: ["s", "down"],
    },
    left: {
      keyboard: ["a", "left"],
    },
    right: {
      keyboard: ["d", "right"],
    },
    enter: {
      keyboard: ["space", "enter"],
    },
  },
});
