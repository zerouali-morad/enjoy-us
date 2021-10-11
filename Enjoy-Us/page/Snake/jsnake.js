let canvas;
let ctx;
let game;
let score = 0;

// Taille case 
const gridSize = 20;

// Velocity
let VeloX = 0;
let VeloY = 0;

// Snake
const snake = [];
let tail = 1;

// Position du Snake
let snakeX = 10;
let snakeY = 10;

//Buttons
const button = document.querySelector('.replay')
const easy = document.querySelector('.level1')
const medium = document.querySelector('.level2')
const hard = document.querySelector('.level3')

let f = 8;

window.onload = function() {
  canvas = document.getElementById('boardsnake');
  ctx = canvas.getContext('2d');
  affScore = document.getElementById('score')
  easy.addEventListener('click', easyLevel)
  medium.addEventListener('click', mediumLevel)
  hard.addEventListener('click', hardLevel)
  document.addEventListener('keydown', onKeyDown);
  game = setInterval(draw, 1000 / f);
};


function easyLevel() {
  f = 8
}

function mediumLevel() {
  f = 12
}

function hardLevel() {
  f = 15
}

// Direction
function onKeyDown(e) {
    switch (e.keyCode) {
      case 37:                  //Gauche
        if(VeloX != 1){
          VeloX = -1;
          VeloY = 0;
          break;
        }
        else {
          VeloX = 1;
          VeloY = 0;
          break;
        }
      case 38:                  //Haut
        if(VeloY != 1){
          VeloX = 0;
          VeloY = -1;
          break;
        }
        else {
          VeloX = 0;
          VeloY = 1;
          break;
        }
      case 39:                  //Droite
        if(VeloX != -1){
          VeloX = 1;
          VeloY = 0;
          break;
        }
        else {
          VeloX = -1;
          VeloY = 0;
          break;
        }
      case 40:                  //Bas
        if(VeloY != -1){
          VeloX = 0;
          VeloY = 1;
          break;
        }
        else {
          VeloX = 0;
          VeloY = -1;
          break;
        }
    };
};

// Position apple
const apple = {
    x:Math.floor(Math.random() * gridSize),
    y:Math.floor(Math.random() * gridSize),
};

// Reset
button.addEventListener('click', reset)

function reset() {
  button.classList.remove('replay-show');
  tail = 1;
  score = 0;
  VeloX = 0;
  VeloY = 0;
  snakeX = 10;
  snakeY = 10;
  game = setInterval(draw, 1000 / f);
}


function lose() {
  clearInterval(game)
  button.classList.add('replay-show');
}


function lose() {
  clearInterval(game)
  button.classList.add('replay-show');
}


// Lancement du jeu
function draw() {
  ctx.fillStyle = '#0B0A35';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  snakeX += VeloX;
  snakeY += VeloY;

  if (snakeX == apple.x && snakeY == apple.y) {
    score++;
    tail++;
    apple.x = Math.floor(Math.random() * gridSize);
    apple.y = Math.floor(Math.random() * gridSize);
  };
  
  affScore.textContent = score
  ctx.fillStyle = 'red';
  ctx.fillRect(
    apple.x * gridSize,
    apple.y * gridSize,
    gridSize,
    gridSize,
  );
  
  // Dégradé de couleur
  let lineaire = ctx.createLinearGradient(0, 150, 300, 150);
  lineaire.addColorStop(0.000, 'rgba(247, 149, 51, 1.000)');
  lineaire.addColorStop(0.151, 'rgba(243, 112, 85, 1.000)');
  lineaire.addColorStop(0.311, 'rgba(239, 78, 123, 1.000)');
  lineaire.addColorStop(0.462, 'rgba(161, 102, 171, 1.000)');
  lineaire.addColorStop(0.621, 'rgba(80, 115, 184, 1.000)');
  lineaire.addColorStop(0.748, 'rgba(16, 152, 173, 1.000)');
  lineaire.addColorStop(0.875, 'rgba(7, 179, 155, 1.000)');
  lineaire.addColorStop(1.000, 'rgba(111, 186, 130, 1.000)');
  ctx.fillStyle = lineaire

  for (var i = 0; i < snake.length; i++) {
    ctx.fillRect(
      snake[i].x * gridSize,
      snake[i].y * gridSize,
      gridSize,
      gridSize,
    );
    
    // Mort par lui-même
    if (tail > 1) {
      if (snake[i].x == snakeX && snake[i].y == snakeY) {
        lose();
      };
    };
  };
  
  snake.push({x: snakeX, y: snakeY})
  while (snake.length > tail) {
    snake.shift()
  };  

  // Mort par bordure
  if (snakeX < 0 || snakeX * gridSize >= canvas.width  || snakeY < 0 || snakeY * gridSize >= canvas.height) {
    lose();
  };
}