 var   ball;                                                                                                                                     var ball,img,paddle;
function preload() {
  ballimg = loadImage('ball.png');
  paddleimg=loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball=createSprite(60,200,20,20);
   ball.addImage(ballimg)
  ball.velocityX=9;  
  paddle=createSprite(350,200,20,100);
  paddle.addImage(paddleimg)
  

}

function draw() {
  background(205,153,0);
  
  edges=createEdgeSprites();
    explosion();
  //Bounce Off the Left Edge only
  ball.bounceOff(edges[0]); 
  ball.bounceOff(paddle)
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);


  
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+20;
  }
  drawSprites();
  
}

function explosion()
{
  if(ball.bounceOff (edges[0]||edges[1]||edges[2]||paddle)){
  ball.velocityY=random(0,8);
}

}

