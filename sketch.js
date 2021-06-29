const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
iron= new iron(300,500);
  stone = new stone(700,400);
Rubber1 = new Rubber(900,500);

}

function draw(){
    background("purple");
    Engine.update(engine);


    plane.display();
    hammer.display();
iron.display();
    stone.display();
    Rubber1.display();
 
}