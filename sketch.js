var bg;
var sleep;
var brush;
var bath
var gym;
var eat;
var drink;
var move;
var astronaut;
var moveImg;

function preload(){
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
  brush = loadAnimation("images/brush.png");
  gym= loadAnimation("images/gym11.png","images/gym12.png");
  eat = loadAnimation("images/eat1.png","images/eat2.png");
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  moveImg = loadAnimation("images/move.png","images/move1.png");

}

function setup() {
  createCanvas(800,400);

}

function draw() {
  background(255,255,255);

  var bcg = createSprite(320,200);
  bcg.addImage(bg);

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale = 0.1;



  if(keyDown("up")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 260;
    astronaut.velocityx = 0;
    astronaut.velocityY = 0;

  }

  if(keyDown("down")){
    astronaut.addAnimation("gyming",gym);
    astronaut.changeAnimation("gyming");
    astronaut.y = 260;
    astronaut.velocityx = 0;
    astronaut.velocityY = 0;

  }

  if(keyDown("left")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.y = 260;
    astronaut.velocityx = 0;
    astronaut.velocityY = 0;

  }

  if(keyDown("right")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.y = 260;
    astronaut.velocityx = 0;
    astronaut.velocityY = 0;

  }

  if(keyDown("m")){
    astronaut.addAnimation("moving",moveImg);
    //astronaut.changeAnimation("moving");
    //astronaut.y = 260;
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;

  }

  drawSprites();
}