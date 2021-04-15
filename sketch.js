var ground;
var bucket;
var paperSprite, paperBody, paperImage;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	paperImage = loadImage("paper.png")
}

function setup() {
	rectMode(CENTER)

	createCanvas(1600, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    paperBody = Bodies.circle(200, 300, 40,{restitution : 0.5, density : 1.0, friction : 0.5})
	World.add(world, paperBody)

	paperSprite = createSprite(200, 300, 40, 40)
    paperSprite.addImage(paperImage)
	paperSprite.scale = 0.5;

	ground = new Ground(800, 470, 1600, 30);
    bucket1 = new Base(1200, 340, 65, 60);
	bucket2 = new Bucket(1095, 335, 20, 225);
	bucket3 = new Bucket(1305, 335, 20, 225)

	Engine.run(engine)
  
}


function draw() 
{
	
	Engine.update(engine)

  background("grey");

  rectMode(CENTER);

  keyPressed();

  paperSprite.x = paperBody.position.x;
  paperSprite.y = paperBody.position.y;
  
  bucket2.display();
  bucket3.display();
  bucket1.display();
  ground.display();
  
  
  
  drawSprites();
 
}

function keyPressed()
{
	if(keyDown("up"))
	{

	paperBody = Bodies.circle(paperSprite.position.x + 50, paperSprite.position.y -20, 40, {restitution : 0.5, density : 1.0, friction : 0.5});
	World.add(world, paperBody)

  
	}
}

  