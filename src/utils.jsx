export function displayDialogue(text, onDisplayEnd) {
  const dialogueUI = document.getElementById("textbox-container");
  const dialogue = document.getElementById("dialogue");

  dialogueUI.style.display = "block";

  let index = 0;
  let currentText = "";
  const intervalRef = setInterval(() => {
    if (index < text.length) {
      currentText += text[index];
      dialogue.innerHTML = currentText;
      index++;
      return;
    }
    clearInterval(intervalRef);
  }, 5);

  const closeBtn = document.getElementById("close");

  function onCloseBtnClick() {
    onDisplayEnd();
    dialogueUI.style.display = "none";
    dialogue.innerHTML = "";
    clearInterval(intervalRef);
    closeBtn.removeEventListener("click", onCloseBtnClick);
  }

  closeBtn.addEventListener("click", onCloseBtnClick);
}

// Scale sizing based on device
export function setCamScale(k) {
  const resizeFactor = k.width() / k.height();
  if (resizeFactor < 1) {
    k.camScale(k.vec2(1));
    return;
  }

  k.camScale(k.vec2(1.5));
}

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
  // player.movement = [0,0,0,0] //// DIAGANOL
}

export function movementHelper(player, direction) {
  let sideOrDirection = direction;
  if (direction === "right") {
    sideOrDirection = "side";
    player.flipX = false;
  }
  if (direction === "left") {
    sideOrDirection = "side";
    player.flipX = true;
  }
  player.direction = direction;

  if (player.getCurAnim().name !== `walk-${sideOrDirection}`) {
    player.play(`walk-${sideOrDirection}`);
  }
}
