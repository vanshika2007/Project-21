var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600, 400);

  weight=random(30,52);
  speed=random(200,300);
thickness=random(22,83)
 bullet= createSprite(50,200,50,50);
 bullet.shapeColor=color(255);
 bullet.velocityX = speed;
 wall = createSprite(1200,200,thickness,height/2); 
 wall.shapeColor=color(80,80,80);
  
 
 
}

function draw() {
  background(0);



function hasCollided(lbullet,lwall){
bulletRightEdge = lbullet.x + lbullet.width;
wallLeftEdge= wall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}
if(hasCollided(bullet,wall)){
  bullet.velocityX= 0;
  var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
 
  if(damage>10){
 wall.shapeColor = color(255);
  }

  if(damage<10){
    wall.shapeColor = color(0,255,0);
     }
}







  
  drawSprites();
}

