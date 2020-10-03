var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var body1, body2, body3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
		
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	packageSprite.visible = false;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityX = 0;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
	body1 = new body(350, 640, 150, 20);
    body2 = new body(265, 570, 20, 70);
    body3 = new body(435, 570, 20, 70);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  body1.display();
  body2.display();
  body3.display();

   keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);    
	packageSprite.visible = true;
  }
 
 if(keyWentDown(LEFT_ARROW)) {
	helicopterSprite.velocityX = -3; 

 } else if(keyWentUp(LEFT_ARROW)) {

	helicopterSprite.velocityX = 0;

 }

 if(keyWentDown(RIGHT_ARROW)) {
	helicopterSprite.velocityX = 3; 

 } else if(keyWentUp(RIGHT_ARROW)) {

	helicopterSprite.velocityX = 0;

 }
}



