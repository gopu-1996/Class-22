const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var myengine,myworld,object;

function setup() {
  createCanvas(400,400);

  myengine=Engine.create();

  myworld=myengine.world;

  var option={

    isStatic:true
  }

  object=Bodies.rectangle(200,390,400,20,option);

  World.add(myworld,object);

  console.log(object.position.x);


}

function draw() {
  background(0); 
  Engine.update(myengine); 
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,20);
  drawSprites();
}