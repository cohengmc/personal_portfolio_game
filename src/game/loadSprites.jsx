import { k } from "../kaboomCtx";

export default function loadSriteCharacters() {
  k.loadSprite("spritesheet", "./spritesheet.png", {
    sliceX: 39,
    sliceY: 31,
    anims: {
      "idle-down": 936,
      "walk-down": { from: 936, to: 939, loop: true, speed: 8 },
      "idle-side": 975,
      "walk-side": { from: 975, to: 978, loop: true, speed: 8 },
      "idle-up": 1014,
      "walk-up": { from: 1014, to: 1017, loop: true, speed: 8 },
    },
  });

  k.loadSprite("geoff_logo", "./geoff_character_thiq.png", {
    sliceX: 2,
    sliceY: 1,
    anims: {
      "peace-logo": { from: 0, to: 1, loop: true, speed: 2 },
    },
  });

  k.loadSprite("dl_sprite", "./Deeplocal_Friend_v1.png", {
    sliceX: 4,
    sliceY: 1,
    anims: {
      "idle-down": { from: 0, to: 3, loop: true, speed: 3 },
      "walk-down": { from: 0, to: 3, loop: true, speed: 8 },
      "idle-side": { from: 0, to: 3, loop: true, speed: 3 },
      "walk-side": { from: 0, to: 3, loop: true, speed: 8 },
      "idle-up": { from: 0, to: 3, loop: true, speed: 3 },
      "walk-up": { from: 0, to: 3, loop: true, speed: 8 },
    },
  });

  k.loadSprite("dl_logo", "./Deeplocal_Logo.png", {
    sliceX: 10,
    sliceY: 1,
    anims: {
      "spin-logo": { from: 0, to: 9, loop: true, speed: 7.2 },
    },
  });

  k.loadSprite("coin", "./Coin1.png", {
    sliceX: 9,
    sliceY: 1,
    anims: {
      "spin-logo": { from: 0, to: 8, loop: true, speed: 7.2 },
    },
  });

  k.loadSprite("Geoff_Sprite", "./Geoff_Sprite.png", {
    sliceX: 16,
    sliceY: 1,
    anims: {
      "idle-down": { from: 12, to: 13, loop: true, speed: 2 },
      "walk-down": { from: 0, to: 3, loop: true, speed: 8 },
      "idle-side": { from: 4, to: 5, loop: true, speed: 2 },
      "walk-side": { from: 4, to: 7, loop: true, speed: 8 },
      "idle-up": { from: 14, to: 15, loop: true, speed: 2 },
      "walk-up": { from: 8, to: 11, loop: true, speed: 8 },
    },
  });

  k.loadSprite("Cuberover_Sprite", "./Cuberover_Sprite.png", {
    sliceX: 16,
    sliceY: 1,
    anims: {
      "idle-down": { from: 14, to: 15, loop: true, speed: 2 },
      "walk-down": { from: 4, to: 5, loop: true, speed: 3 },
      "idle-side": { from: 10, to: 11, loop: true, speed: 2 },
      "walk-side": { from: 8, to: 9, loop: true, speed: 4 },
      "idle-up": { from: 12, to: 13, loop: true, speed: 2 },
      "walk-up": { from: 6, to: 7, loop: true, speed: 3 },
    },
  });
  k.loadSprite("Nick_Sprite", "./nicks_sprite.png", {
    sliceX: 8,
    sliceY: 1,
    anims: {
      "idle-down": { from: 0, to: 1, loop: true, speed: 2 },
      "walk-down": { from: 0, to: 1, loop: true, speed: 3 },
      "idle-side": { from: 6, to: 7, loop: true, speed: 2 },
      "walk-side": { from: 6, to: 7, loop: true, speed: 4 },
      "idle-up": { from: 4, to: 5, loop: true, speed: 2 },
      "walk-up": { from: 4, to: 5, loop: true, speed: 3 },
    },
  });
}
