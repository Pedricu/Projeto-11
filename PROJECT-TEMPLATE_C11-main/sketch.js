var sea, seaImg, seaColide
var ship, shipImg
function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  ship = createSprite(200,200,35,35);
  ship.addAnimation('moving',shipImg);
  ship.scale = 0.2;
  sea = createSprite(400,200,400,45);
  sea.addImage('ondas',seaImg);
  sea.x = sea.width/7;
  sea.velocityX = -4;
  sea.scale = 0.3;
}

function draw() {
  background(180);
  if (sea.x < -150){
    sea.x = sea.width/7;
  }
  ship.depth = sea.depth
  ship.depth = ship.depth + 1
  
  drawSprites();
}