var balloon, balloonImage1, balloonImage2;
var database;
var height;
var prota, protaIdleAn,protaRunAn;
var trees;
var houses;
var fences;
var background;
var monsters;
var house_Img, house, house2, house3aw;
var invisibleWall1,invisibleWall2,invisibleWall3,invisibleWall4

function preload() {
  house_Img=loadImage("house1.png");
  protaRunAn=loadAnimation("protaAns/protaRun1.png","protaAns/protaRun2.png","protaAns/protaRun3.png","protaAns/protaRun4.png","protaAns/protaRun5.png","protaAns/protaRun6.png");
  protaIdleAn=loadAnimation("protaAns/protaIdle1.png","protaAns/protaIdle2.png","protaAns/protaIdle3.png");
}

function setup() {
  createCanvas(1600, 1600);

  invisibleWall1=createSprite(800,0,1600,20);
  invisibleWall1.visible=false;  

  invisibleWall2=createSprite(0,800,20,1600);
  invisibleWall2.visible=false;

  invisibleWall3=createSprite(1600,800,20,16000);
  invisibleWall3.visible=false;

  invisibleWall4=createSprite(800,1600,1600,20);
  invisibleWall4.visible=false;

  house=new House(house_Img, 10, 50);
  house2=new House(house_Img, 110, 50);
  house3=new House(house_Img, 210, 50);

  prota = createSprite(400, 400, 10, 10);
  prota.shapeColor = "blue";
  prota.addAnimation("Idle", protaIdleAn);
  prota.addAnimation("run", protaRunAn);

}

function draw() {
  background(rgb(160,179,70));

  prota.collide(invisibleWall1);
  prota.collide(invisibleWall2);
  prota.collide(invisibleWall3);
  prota.collide(invisibleWall4);



  if (keyIsDown(87)) {
    prota.position.y = prota.position.y - 7
    console.log("tecla");
    
  }
  if (keyIsDown(83)) {
    prota.position.y = prota.position.y + 7
    console.log("tecla");

  }
  if (keyIsDown(68)) {
    prota.position.x = prota.position.x + 7
    console.log("tecla");
  }
  if (keyIsDown(65)) {
    prota.position.x = prota.position.x - 7
    console.log("tecla");
  }

  if(mousePressed){
    console.log("x: "+mouseX+" y: "+mouseY);
  }

  camera.position.x=800

  drawSprites();
}

function mousePressed(){}

function keyPressed(){
  if(keyCode===87||keyCode===83||keyCode===68||keyCode===65){
    prota.changeAnimation("run", protaRunAn);
  }
}
function keyReleased(){
  prota.changeAnimation("Idle", protaIdleAn);
}