const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var stand1, stand2;

//stand1 blocks
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
//stand2 blocks
var block17,block18,block19,block20,block21,block22,block23,block24,block25;

var polygon,slingshot;

var score = 0;

function preload()
{
	
}

function setup() {
	createCanvas(1365, 655);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(682.5,640,1365,30);
  stand1 = new Ground(600,470,350,20);
  stand2 = new Ground(1100,300,250,20);

  //level one
  block1 = new BoxTwo(480,430,40,50);
  block2 = new Box(520,430,40,50);
  block3 = new BoxTwo(560,430,40,50);
  block4 = new Box(600,430,40,50);
  block5 = new BoxTwo(640,430,40,50);
  block6 = new Box(680,430,40,50);
  block7 = new BoxTwo(720,430,40,50);
  //level two
  block8 = new BoxTwo(520,390,40,50);
  block9 = new Box(560,390,40,50);
  block10 = new BoxTwo(600,390,40,50);
  block11 = new Box(640,390,40,50);
  block12 = new BoxTwo(680,390,40,50);
  //level three
  block13 = new BoxTwo(560,350,40,50);
  block14 = new Box(600,350,40,50);
  block15 = new BoxTwo(640,350,40,50);
  //level four
  block16 = new BoxTwo(600,310,40,50);

  //level one
  block17 = new Box(1020,260,40,50);
  block18 = new BoxTwo(1060,260,40,50);
  block19 = new Box(1100,260,40,50);
  block20 = new BoxTwo(1140,260,40,50);
  block21 = new Box(1180,260,40,50);
  //level two
  block22 = new Box(1060,210,40,50);
  block23 = new BoxTwo(1100,210,40,50);
  block24 = new Box(1140,210,40,50);
  //level three
  block25 = new Box(1100,160,40,50);

  polygon = new Polygon(150,600,30);
  slingshot = new Slingshot(polygon.body,{x:150,y:450});
	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);

  noStroke();
  textSize(35)
  fill("white")
  text("Score: "+score,750,40);

  Engine.update(engine);
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  block20.score();
  block21.score();
  block22.score();
  block23.score();
  block24.score();
  block25.score();

  ground.display();
  stand1.display();
  stand2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  polygon.display();
  slingshot.display();
}


function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX , y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(polygon.body, {x:235, y:420}) 
      slingshot.attach(polygon.body);
  }
}