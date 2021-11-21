var leafOrange, leafOrangeImg;
var apple, appleImg;
var rabbit, rabbitImg;
var leafGreen, leafGreenImg;
var garden, gardenImg;

function preload()
{

  leafOrangeImg = loadImage("orangeLeaf.png");
  appleImg = loadImage("apple.png");
  rabbitImg = loadImage("rabbit.png");
  leafGreenImg = loadImage("leaf.png");
  gardenImg = loadImage("garden.png");


}

function setup()
{

  createCanvas(400,400);
  garden = createSprite(200,200);
  garden.addImage(gardenImg);
  garden.depth = garden.depth -1;
  

  rabbit = createSprite(160 ,340);
  rabbit.addImage(rabbitImg);
  rabbit.scale = 0.09;

  apple = createSprite()
  apple.visible = false;
  
  orangeLeaf = createSprite()
  orangeLeaf.visible = false;
  
  greenLeaf = createSprite()
  greenLeaf.visible = false;

}

function draw()
{

  rabbit.x = World.mouseX;
  console.log(frameCount);

  if(frameCount % 110 === 0)
  {
    createGreenLeaf();
  }
  if(frameCount % 140 === 0)
  {
    createOrangeLeaf();
  }
  if(frameCount % 170  === 0)
  {
    createApple();
  }
  if(rabbit.isTouching(apple))
  {
    apple.visible = false;
  }
  if(rabbit.isTouching(greenLeaf))
  {
    greenLeaf.visible = false;
  }
  if(rabbit.isTouching(orangeLeaf))
  {
    orangeLeaf.visible = false;
  }
  
  drawSprites()
}

function createGreenLeaf()
{
  greenLeaf.visible = true;
  greenLeaf.x = random(50,350)
  greenLeaf.y = 0;
  greenLeaf.addImage(leafGreenImg);
  greenLeaf.scale = 0.09;
  greenLeaf.velocityY = 4;
}

function createOrangeLeaf()
{
  orangeLeaf.visible = true;
  orangeLeaf.x = random(50,350)
  orangeLeaf.y = 0;
  orangeLeaf.addImage(leafOrangeImg);
  orangeLeaf.scale = 0.09;
  orangeLeaf.velocityY = 4;
}

function createApple()
{
  apple.visible = true;
  apple.x = random(50,350);
  apple.y = 0;
  apple.addImage(appleImg);
  apple.scale = 0.09;
  apple.velocityY = 4;
}

