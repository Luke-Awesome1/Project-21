var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  
  thickness = random(22,83);

  speed=random(223,321);
  weight=random(30,52)

  bullet = createSprite(50,200,50,20);
  bullet.shapeColor = "gray";

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background("white");  

  bullet.velocityX = speed;

  if (wall.x-bullet.x < (bullet.width-wall.width)) {
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);

    if (damage>10) {
      wall.shapeColor=color(255,0,0);
    }

    if (damage<10) {
      wall.shapeColor=color(0,255,0);
    }
  }

  drawSprites();
}