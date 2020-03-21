const SCALE = 2;
const WIDTH = 48;
const HEIGHT = 64;
const SCALED_WIDTH = SCALE * WIDTH;
const SCALED_HEIGHT = SCALE * HEIGHT;
const CYCLE_LOOP = [0, 1, 0, 2];
const FACING_RIGHT = 1;
const FACING_UP = 2;
const FACING_LEFT = 3;
const FRAME_LIMIT = 12;
const MOVEMENT_SPEED = 3;
const canWidth =1300;
const canHeight = 600;

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let keyPresses = {};
let currentDirection = FACING_UP;
let currentLoopIndex = 0;
let frameCount = 0;
let positionX = 0;
let positionY = 270;
let img = new Image();

window.addEventListener('keydown', keyDownListener);
function keyDownListener(event) {
    keyPresses[event.key] = true;

}

window.addEventListener('keyup', keyUpListener);
function keyUpListener(event) {
    keyPresses[event.key] = false;
}

function loadImage() {
  img.src = 'photos/dodo1.png';
  img.onload = function() {
    window.requestAnimationFrame(gameLoop);
  };
}

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
                frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
                canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
}

loadImage();




function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let hasMoved = false;

  

  if (keyPresses.ArrowLeft) {
    moveCharacter(-MOVEMENT_SPEED, 0, FACING_LEFT);
    hasMoved = true;
  } else if (keyPresses.ArrowRight) {
    moveCharacter(MOVEMENT_SPEED, 0, FACING_RIGHT);
    hasMoved = true;
  }

  if (hasMoved) {
    frameCount++;
    if (frameCount >= FRAME_LIMIT) {
      frameCount = 0;
      currentLoopIndex++;
      if (currentLoopIndex >= CYCLE_LOOP.length) {
        currentLoopIndex = 0;
      }
    }
  }
  
  if (!hasMoved) {
    currentLoopIndex = 0;
  }

  drawFrame(CYCLE_LOOP[currentLoopIndex], currentDirection, positionX, positionY);
  window.requestAnimationFrame(gameLoop);
}


function moveCharacter(deltaX, deltaY, direction) {
  if (positionX + deltaX > 0 && positionX + SCALED_WIDTH + deltaX < canvas.width) {
    positionX += deltaX;
  }
  if (positionY + deltaY > 0 && positionY + SCALED_HEIGHT + deltaY < canvas.height) {
    positionY += deltaY;
  }
  currentDirection = direction;

  if (positionX >1200) {
  positionX = 0;
}
}
