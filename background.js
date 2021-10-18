let x;
let y;
let a;
let b;

function setup() {
  createCanvas(600, 400);
  angleMode(DEGREES);
  //gradient background
  c1 = color(158,194,255); 
  c2 = color(66, 89, 195);
  setGradient(c1, c2);
  x = 0
  y = 0

   for(var i = 0; i < 25; i++){
    drawRandomFlower();
  }
}


function draw() {
  //sun
  noStroke();
  fill(240, 219, 84, 200);
  ellipse(600, 20, 80, 80);
  
  //clouds 
  noStroke();
  fill(255, 255, 255, 50);
  fill(204, 204, 204);
  fill(178, 234, 242, 50);
  blendMode(LIGHTEST);
  ellipse(300, 20, 60, 60);
  ellipse(270, 10, 60, 60);
  ellipse(340, 10, 60, 60);
  
  ellipse(0, 0, 60, 60);
  ellipse(90, 0, 60, 60);
  ellipse(45, 10, 60, 60);


}

// you don't need the r variable on line 347 since you didn't use it
function leaf(leafX, leafY, r) {
    noStroke();
    fill(29, 64, 35);
    blendMode(DARKEST);
    ellipse(leafX, leafY, 5, 30)
    ellipse(leafX, leafY, 5, 30);


    if (x < width) {
      x = x + 1;
    } else if (x == width) {
      x = 0;
    }
  }

function setGradient(c1, c2) {
  noFill();
  for (var y = 0; y < height; y++) {
    var inter = map(y, 0, height, 0, 1);
    var c = lerpColor(c1, c2, inter);
    stroke(c);
    line(0, y, width, y);
  }

}
function drawRandomFlower(){
  
  var petalSize = random(10, 20);
  var flowerCenterX = random(width);
  var flowerCenterY = random(height/2 + petalSize, height);
  var r = random(255);
  var g = random(255);
  var b = random(255);
  
  noStroke();
  fill(r, g, b);
  ellipse(flowerCenterX - petalSize/2, flowerCenterY - petalSize/2, petalSize, petalSize);
  ellipse(flowerCenterX + petalSize/2, flowerCenterY - petalSize/2, petalSize, petalSize);
  ellipse(flowerCenterX - petalSize/2, flowerCenterY + petalSize/2, petalSize, petalSize);
  ellipse(flowerCenterX + petalSize/2, flowerCenterY + petalSize/2, petalSize, petalSize);
  
  fill(r/2, g/2, b/2);
  ellipse(flowerCenterX, flowerCenterY, petalSize, petalSize);
}

