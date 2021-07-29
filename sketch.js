var player,player_running,edges;
var path;
function preload(){

  //pre-load images
  player_running = loadAnimation("Runner-1.png","Runner-1.png","Runner-2.png","Runner-2.png");
  path = loadImage("path.png");
}

function setup(){

  createCanvas(400,400);

  //create sprites here
  path1 = createSprite(200,200,20,20); 
  path1.addImage(path);
  path1.scale = 1.2;
  path1.velocityY = 3;

  player = createSprite(205,300,20,20);
  player.addAnimation("running",player_running);
  player.scale = 0.075;

  edges = createEdgeSprites();
  
}

function draw() {
  background(0);

  console.log(player.x);

  if(path1.y > 400){
    path1.y = height/2;
  }
  if(keyDown("RIGHT_ARROW") && player.x == 205){
    player.x = 320;
  }
  if(keyDown("LEFT_ARROW") && player.x == 205){
    player.x=95;
  }
  if(keyDown("RIGHT_ARROW") && player.x == 95){
    player.x = 205;
  }
  if(keyDown("LEFT_ARROW") && player.x == 320){
    player.x=205;
  }
  player.collide(edges);

  drawSprites();
}
