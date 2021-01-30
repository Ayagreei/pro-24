
const Engine1 = Matter.Engine;
const World1 = Matter.World;
const Bodies1 = Matter.Bodies;
const Body1 = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine1.create();
	world = engine.world;

	//Create the Bodies Here.
	Ball = new Ball(200,645 );
	Ground = new Ground(800,650,1600,10);
	Engine1.run(engine);
var x=Event.KeyCode
	wall1 = new Bath(875,610,8,70);
	wall3 = new Bath(725,610,8,70);
	wall2 = new Bath(800,640,158,8);
}

function draw() {
  rectMode(CENTER);
  background(0);
  wall1.display();
  wall3.display();
  wall2.display();
  Ball.display();
	Ground.display();
	keyp();
  drawSprites();

}

function keyp(){	
if (keyDown("up"))	{
Body1.applyForce( Ball.body, {x: Ball.body.position.x, y: Ball.body.position.y}, {x:0.03, y: -0.05});
}
}