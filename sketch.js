

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var leftBucket;
var rightBucket;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;


 	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
 }

	

	
 	ground = new Ground(400,700,800,10);
	leftBucket = new Ground(500,650,10,110);
	rightBucket = new Ground(700,650,10,110);
	
	 
	
	ball = Bodies.circle(100,670,20,ball_options);

	World.add(world, ball)






	Engine.run(engine);
	
	rectMode(CENTER);
  	ellipseMode(RADIUS);
  
}


function draw() {
 
  background(0);
  ground.display();
  leftBucket.display();
  rightBucket.display();

  ellipse(ball.position.x,ball.position.y,20);

  ground.display();
  leftBucket.display();
  rightBucket.display();
  

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === RIGHT_ARROW ){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:25 ,y:-30})
		
	}
}



