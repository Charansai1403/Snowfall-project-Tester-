const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var bgImg
//var doreamon
//var jerry
//var starfire
//var pikachu
var Snow=[]

function preload(){
bgImg=loadImage("sprites/bg.png")
//doreamon=loadImage("doreamon.png")
//jerry=loadImage("jerry.png")
//starfire=loadImage("starfire.png")
//pikachu=loadImage("pokemon.png")
}

function setup() {
  
  createCanvas(1500,850);
  engine=Engine.create();
  world=Engine.world;
  
}
function draw() {
  background(bgImg);  
  Engine.update(engine)
  
if(frameCount % 20 === 0){
 Snow.push(new snow((random(0,200)),0))
 
}

for ( x = 0; x < Snow.length; x++) {
  Snow[x].display();
}
}

