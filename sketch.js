
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)

	paper = new Paper(750,400,30)

	dustbin = new Dustbin(200,680,20,200)
	
	dustbin2 = new Dustbin(290,640,100,20)
	
	dustbin3 = new Dustbin(100,640,100,20)
	

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 ground.display();
 paper.display();
 dustbin.display();
 dustbin2.display();
 dustbin3.display();

  drawSprites();
  
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:-22,y:-22})
	 }
	}
