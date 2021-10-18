function setup() {
createCanvas(400, 400);
textSize(32);
text('Doodle your thoughts', 10, 50);
fill(0, 102, 153);
  
}

function draw() {
  colorMode(HSB);
  if(mouseIsPressed){
   noStroke();
    stroke((5*frameCount) % 360, 40, 100);
    fill((5*frameCount) % 360, 100, 100);

    strokeWeight(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
  
  colorMode(RGB);
}

