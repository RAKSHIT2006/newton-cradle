
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var ground;
var log;

function preload()
{
	
}

function setup() {
canvas = createCanvas( 2000,2000 );
engine = Engine.create();
world = engine.world;




  pendulum1 = new Pendulum (340,450,"silver");
  pendulum2 = new Pendulum (400,450,"blue");
  pendulum3 = new Pendulum (460,450,"orange");
  pendulum4 = new Pendulum (520,450,"red");
  pendulum5 = new Pendulum (580,450,"green");
  

  ground = new Ground(600,900,1200,20)
   
  sling1 = new Sling(pendulum1.body, { x: 340, y: 200 });
  sling2 = new Sling(pendulum2.body, { x: 400, y: 200 });
  sling3 = new Sling(pendulum3.body, { x: 460, y: 200 });
  sling4 = new Sling(pendulum4.body, { x: 520, y: 200 });
  sling5 = new Sling(pendulum5.body, { x: 580, y: 200 });
}




//Engine.run(engine);
  



function draw() {
  
  background(0);
  Engine.update(engine);

  
  
 
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  ground.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  
}

function mouseDragged(){

  Matter.Body.setPosition(pendulum1.body,{x:mouseX,y:mouseY})



}


