var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var b1,b2,b3;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.15

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.9,isStatic:true});
	World.add(world, packageBody);
	
    
	b1 = new Box(400,650,200,20);
	b2 = new Box(310,610,20,100);
	b3 = new Box(500,610,20,100);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10,{isStatic:true});
 	World.add(world, ground);

	Engine.run(engine);
    
}


function draw() {
	

  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;  
  Engine.update(engine);
  
  b1.display();
  b2.display();
  b3.display();
  
 
 

	  if(packageBody.x - b1.x < packageBody.width/2 + b1.width/2
		&& b1.x - packageBody.x < packageBody.width/2 + b1.width/2
		&& packageBody.y - b1.y < packageBody.height/2 + b1.height/2
		&& b1.y - packageBody.y < packageBody.height/2 + b1.height/2 ){
			push();
			textSize(50);
			textFont("jokerMan");
			fill("Limegreen");
			text("Mission Successful!!",210,400);
			pop();
		}
		else
		{   push();
			textSize(40);
			textFont("algerian");
			fill("0");
			text("",210,400);
			pop();}
  
  fill("violet");
  textFont("cursive")
  textSize(30);
  text("Supply mission",300,50);
  fill("blue");
  text("___________",300,56);

  drawSprites();
  
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
  
	packageSprite.x= packageBody.position.x; 
    packageSprite.y= packageBody.position.y; 
	
	

Matter.Body.setStatic(packageBody,false);
  }
}

	
   