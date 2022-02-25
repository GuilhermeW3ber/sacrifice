var balloon, balloonImage1, balloonImage2;
var database;
var height;
var prota;
var trees;
var houses;
var fences;
var background;
var monsters;
var house_Img, house;
var invisibleWall1,invisibleWall2,invisibleWall3,invisibleWall4

function preload() {
  house_Img=loadImage("house1.png")
}

function setup() {
createCanvas(1600, 1600);

invisibleWall1=createSprite(800,0,1600,20);invisibleWall1.visible=false; 
invisibleWall1.visible=false;  

invisibleWall2=createSprite(0,800,20,1600);
invisibleWall2.visible=false;

invisibleWall3=createSprite(1600,800,20,16000);
invisibleWall3.visible=false;

invisibleWall4=createSprite(800,1600,1600,20);
invisibleWall4.visible=false;

house=new House(house_Img, 350, 200);

prota = createSprite(400, 400, 10, 10);
prota.shapeColor = "blue";

}

function draw() {
  background(rgb(160,179,70));
  drawSprites();

  prota.collide(invisibleWall1);
  prota.collide(invisibleWall2);
  prota.collide(invisibleWall3);
  prota.collide(invisibleWall4);

  if (keyIsDown(87)) {
    prota.position.y = prota.position.y - 10
    console.log("tecla");
  }
  if (keyIsDown(83)) {
    prota.position.y = prota.position.y + 10
    console.log("tecla");
  }
  if (keyIsDown(68)) {
    prota.position.x = prota.position.x + 10
    console.log("tecla");
  }
  if (keyIsDown(65)) {
    prota.position.x = prota.position.x - 10
    console.log("tecla");
  }

  if(mousePressed){
    console.log("x: "+mouseX+" y: "+mouseY);
  }
  camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
  plane(10, 10);
  camera.position.x=1000

}

function mousePressed(){

}