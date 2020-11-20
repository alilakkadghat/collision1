
var fixrect,morect;

function setup() {
  createCanvas(800,400);
  fixrect=createSprite(400, 200, 50, 80);
morect=createSprite(200, 200, 50, 50);
fixrect.shapeColor="green";
morect.shapeColor="green";
}

function draw() {
  background(255,255,255);  
morect.x=mouseX;
morect.y=mouseY;

if(morect.x-fixrect.x<morect.width/2+fixrect.width/2 
  &&fixrect.x-morect.x<morect.width/2+fixrect.width/2 
  &&morect.y-fixrect.y<morect.height/2+fixrect.height/2
   && fixrect.y-morect.y<morect.height/2+fixrect.height/2  ){
  fixrect.shapeColor="red";
morect.shapeColor="red";
}
else{
  fixrect.shapeColor="green";
morect.shapeColor="green";
}
  drawSprites();
}