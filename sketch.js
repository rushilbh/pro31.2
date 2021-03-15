const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisions;

function setup() {
  createCanvas(480,800);
  createSprite(400,200,50,50);
  
}

function draw() {
  background(255,255,255);
  for (var k =0; k<=width,k = k + 80;)  {
    divisions.push(new divisions(k,height-divisionHeight/2,10,divisionHeight))
  }
  drawSprites();
}