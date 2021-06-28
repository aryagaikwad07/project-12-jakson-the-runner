var jskson, jakson_running, edges;
var pathImage;
var path;
var coins;
var b1,b2;

function preload(){
  jakson_running = loadAnimation("Runner-1.png","Runner-2.png");
  pathImage = loadImage("path.png");

}

function setup(){
  createCanvas(350,600);
  path = createSprite(165,10,350,600);
  path.addImage("infinteground",pathImage);
  path.velocityY=9;
  path.scale=2;

 jakson = createSprite(200,450,20,50);
  jakson.addAnimation("running",jakson_running);
  jakson.scale = 0.1;
  //jakson.x = 10;
  edges = createEdgeSprites();
 
 b1 = createSprite(10,5,15,1500);
 b2 = createSprite(340,5,15,1500);
 b1.visible = false;
 b2.visible = false;
}

function draw() {
  background("pink");

  if (path.y > 600){
    path.y = height/2;
    
  }
  
  if (keyDown("right")){
    jakson.velocityX = 10;
  }

  if (keyDown("left")){
    jakson.velocityX =-10;
  }

  jakson.collide(b1);
  jakson.collide(b2);
 
 
 drawSprites();
}
