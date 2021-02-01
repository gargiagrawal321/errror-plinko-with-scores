const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.body;

var ground1;
var plinkos=[];
var particles=[];
var divisions=[];
var divisionsHeight=200;

var score=0;
var count=0;
var gameState="start";

function setup() {
  createCanvas(600,800);
  engine=Engine.create()
  world=engine.world;
  for(var k=20;k<width;k=k+80){
    divisions.push(new Division(k,height - divisionsHeight/2,10,divisionsHeight));
 }
 for (var g = 30; g <width; g = g + 50){
   plinkos.push(new Plinko(g,150));
 } 
 for (var g=30;g<width;g=g+50){
  plinkos.push(new Plinko(g,250));
} 
for (var g=30;g<width;g=g+50){
  plinkos.push(new Plinko(g,350));
} 
for (var g=30;g<width;g=g+50){
  plinkos.push(new Plinko(g,450));
} 
ground1=new Ground(300,790,600,10);

Engine.run(engine);

}

function draw() {
  background("pink");  
  drawSprites();
  textSize(18)
  text("Score:"+score,20,40);
  fill("red");
  textSize(22)
  text(" 500 ", 30, 620);
  text(" 500 ", 107, 620);
  text(" 500 ", 200, 620);
  text(" 100 ", 270, 620);
  text(" 100 ", 350, 620);
  text(" 200 ", 440, 620);
  text(" 200 ", 510, 620);
  
  Engine.update(engine);
  ground1.display();

  if (gameState==="end"){
    textSize(90);
    text("GameOver",150,300);
  }

  ground1.display();

  for(var g=0 ;g<plinkos.length ;g++){
    plinkos[g].display();
  }
  if (particles!==null){
    particles.display();
  
  if (particles.body.position.y>760){
    if(particles.body.position.x<300){
      score=score+500;
      particles=null;
      if (count>=5)gameState="end"
    }
    else if(particles.body.position.x<600 && particles.body.position.x>301){
      score=score+100;
      particles=null;
      if(count>=5)gameState="end"
    }
    else if(particles.body.position.x<900 && particles.body.position.x>691){
      score=score+200;
      particles=null;
      if(count>=5)gameState="end"
    }
  }
}

for(var i=0 ;i<divisions.length ;i++){
  divisions[i].display();
}

}

function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle=new Particle(mouseX,10,10,10);
  }
}