let words;
let index = 0;

function preload() {
  words = loadStrings('quote.txt'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont('Georgia');
  textSize(20);
  textAlign(CENTER, CENTER);
  background(0);
  frameRate(10); 
}

function draw() {
  background(0, 20); 
  fill(random(150, 255), random(50, 150), random(50, 150)); 
  noStroke();

  let lines = join(words, ' ').split(' ');
  let word = lines[index]; 


  textSize(random(20, 50));
  text(word, random(width), random(height));

  index++;
  if (index >= lines.length) {
    index = 0; 
  }
}
