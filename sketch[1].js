//create global variables
var bananaImage;
var obstacle_Image;
var obstacleGroup;
var score=0;
var backImage;
var player_running;
var backgroundImage;
var floor1;
var player;
var foodgroup;
var food;
var obstacle;


function preload(){
  backImage = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_01.png", "Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  bananaImage = loadImage("banana.png");
  obstacle_Image = loadImage("stone.png");
}

function spawnFood() {
  //write code here to spawn the food
  if (frameCount % 60 === 0) {
     food = createSprite(100,380,40,10);
   food.y = Math.round(random(250,370));
    food.addImage(bananaImage);
    food.scale = 0.05;
    food.velocityX = -3;
    
     //assign lifetime to the variable
    food.lifetime = 100;
    foodgroup.add(food);
    
  }
 }


function spawnObstacles() {
  //write code here to spawn the food
  if (frameCount % 80 === 0) {
     obstacle = createSprite(100,380,40,10);
   obstacle.y = Math.round(random(250,370));
    obstacle.addImage(obstacle_Image);
    obstacle.scale = 0.05;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
    
  }
 }

function setup() {
  createCanvas(400, 400);
 backgroundImage = createSprite(400, 400,0,0);
  backgroundImage.addImage(backImage);
  backgroundImage.velocityX=-4;
  
  floor1=createSprite(200,400,400,10);
  floor1.visible=false;
  
  player= createSprite(10,380,10,10);
  player.addAnimation("monkey", player_running);
  player.scale=0.1;
  
  foodgroup= new Group();
  obstacleGroup= new Group();
  
  
  
}

function draw() {
  spawnFood();
      if(keyDown("space")){
  player.velocityY = -10;
  }
   player.velocityY =  player.velocityY + 1;
  player.collide(floor1);
  spawnObstacles();
  background(220);
  if(backgroundImage.x < 0)
  {
    backgroundImage.x=backgroundImage.width/2;
  }
  if(foodgroup.isTouching(player))
  {
    score= score+2;
    food.remove();
  }
  if(obstacleGroup.isTouching(player))
  {
    player.scale=0.1;
  }
  switch(score)
  {
    case 10:
      player.scale= 0.12;
      break;
    case 20:
      player.scale=0.14;
      break;
    case 30:
     player.scale=0.16;
      break;
    case 40:
     player.scale=0.18;
      break;
    default:break;
      
  }
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score, 300,50);
  
}