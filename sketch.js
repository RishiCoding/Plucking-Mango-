
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;


function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
	
	rope=new Rope(stoneObj, {x:200, y:400});
	mango1=new mango(1100,100,30);
	mango2=new mango(1020,100,30);
	mango3=new mango(1010,200,30);
	mango4=new mango(1100,200,30);
	stoneObj=new Stone(200, 400, 40, 50);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  
  
  stoneObj.display();
  treeObj.display();
  mango1.display();	
  mango2.display();
  mango3.display();
  mango4.display();
  groundObject.display();
  rope.display();
}
