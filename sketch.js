

var movingRect, fixedRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 30, 100);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,300,100,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100,300,50,50);
  gameObject1.shapeColor = "green";
  gameObject1.debug = true;
 gameObject1.velocityX = 2;

  gameObject2 = createSprite(700,300,50,50);
  gameObject2.shapeColor = "green";
  gameObject2.debug = true;
  gameObject2.velocityX = -2;
}

function draw() {
  background(0); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

if(isTouching(gameObject1,gameObject2)) {
  
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";

}

else {

    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
}


bounce(gameObject1, gameObject2);

  
  drawSprites();
}


