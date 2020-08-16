
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var Dustbin, Paper,Ground
var world;


function setup() {
	createCanvas(1000, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	Dustbin=new dustbin(600,650);
	Paper=new paper(200,450,40);
	Ground=new ground(width/2,670,width,20);
	//Create a Ground
	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  Dustbin.display();
  Paper.display();
  Ground.display();
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === RIGHT_ARROW) {

    	Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85});
    
  	}
}





