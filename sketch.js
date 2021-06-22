var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg, leaves, leavesImg;
var selectSprites = Math.round(random(1, 2));

function preload(){
 gardenImg = loadImage("garden.png");
 rabbitImg = loadImage("rabbit.png");
 appleImg = loadImage("apple.png");
 leavesImg = loadImage("orangeLeaves.png");
}

function setup(){
  
 createCanvas(400,400);
  
 //background
 garden = createSprite(200,200);
 garden.addImage(gardenImg);

 //creating rabbit 
 rabbit = createSprite(180,340,30,30);
 rabbit.scale = 0.09;
 rabbit.addImage(rabbitImg);

}

function spawnApples() {
 if(frameCount % 60 == 0) {
   apple = createSprite(Math.round(random(50, 350)), 40, 10, 10);
   apple.addImage(appleImg);
   apple.scale = 0.04;
   apple.velocityY = 3;
   apple.depth = rabbit.depth;
   rabbit.depth += 1;
  }
}

function spawnLeaves() {
 if(frameCount % 144 == 0) {
    leaves = createSprite(Math.round(random(25, 375)), 20, 10, 10);
    leaves.addImage(leavesImg);
    leaves.scale = 0.1;
    leaves.velocityY = 7;
    leaves.depth = rabbit.depth;
    rabbit.depth += 1;
  }
}

function draw() {
 background(0);
  
 edges= createEdgeSprites();
 rabbit.collide(edges);

 rabbit.x = mouseX;

 drawSprites();
 spawnApples();
 spawnLeaves();
}
