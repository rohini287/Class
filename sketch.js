const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies


var engine,world
var box1,box2;
var ground1

function setup(){
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;
 box1=new Box(200,100,70,70);
 box2=new Box(250,10,70,70);
  
 ground1=new Ground(200,380,400,20);

}
function draw(){
  background(0)
  Engine.update(engine)
  
fill ("green")

box1.display();
box2.display();
ground1.display();
}