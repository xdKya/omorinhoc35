var ball,position,database;

function setup(){
  createCanvas(500,500);

  ball = createSprite(250,250,20,20);
  ball.shapeColor = ("black");
}

function draw(){
  background("white");

  if(keyDown("d")){
    ball.x +=5;
  }
  if(keyDown("a")){
    ball.x -=5;
  }
  if(keyDown("w")){
    ball.y -=5;
  }
  if(keyDown("s")){
    ball.y +=5;
  }

  drawSprites();
  
}
