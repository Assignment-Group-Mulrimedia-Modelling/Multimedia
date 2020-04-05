var SCALEd = 2.5;
var WIDTHs = 48;
var HEIGHTs = 64;
var SCALED_WIDTH = SCALEd * WIDTHs;
var SCALED_HEIGHT = SCALEd * HEIGHTs;
var CYCLE_LOOP = [0, 1, 0, 2];
var FACING_RIGHT = 1;
var FACING_UP = 2;
var FACING_LEFT = 3;
var FACING_DOWN = 0;
var FRAME_LIMIT = 12;
var MOVEMENT_SPEED = 3;
//const canWidth = 1300;
//const canHeight = 600;

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var keyPresses = {};
var currentDirection = FACING_UP;
var currentLoopIndex = 0;
var frameCount = 0;
var positionX = 0;
var positionY = 270;
var img = new Image();


//Mr dodo functions
window.addEventListener('keydown', keyDownListener);
function keyDownListener(event) {
    keyPresses[event.key] = true;

}

window.addEventListener('keyup', keyUpListener);
function keyUpListener(event) {
    keyPresses[event.key] = false;
    currentDirection = FACING_UP;    
}

function loadImage() {
  img.src = 'dodo1.png';
  img.onload = function() {
    window.requestAnimationFrame(gameLoop);
  };
}

function drawFrame(frameX, frameY, canvasX, canvasY) {
  ctx.drawImage(img,
          frameX * WIDTHs, frameY * HEIGHTs, WIDTHs, HEIGHTs,
          canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
}

loadImage();


function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var hasMoved = false;

  

  if (keyPresses.ArrowLeft) {
    moveCharacter(-MOVEMENT_SPEED, 0, FACING_LEFT);
    hasMoved = true;
  } else if (keyPresses.ArrowRight) {
    moveCharacter(MOVEMENT_SPEED, 0, FACING_RIGHT);
    hasMoved = true;
  } else if (keyPresses.ArrowUp) {
    moveCharacter(0, -MOVEMENT_SPEED, FACING_DOWN);
    hasMoved = true;
  } else if (keyPresses.ArrowDown) {
    moveCharacter(0, MOVEMENT_SPEED, FACING_UP);
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

  if ((positionX + deltaX)> 1200) {
  positionX = 5;
  }
  if ((positionX + deltaX) < 1) {
  positionX = 1200;
  }  

  if ((positionY + deltaY) < 200) {
   positionY = 200;
  }

console.log(positionX);
console.log(positionY);

}

    //document.write('<script type="text/javascript" src="output.js"></script>');   

