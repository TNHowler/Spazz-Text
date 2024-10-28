var wigglyLetters=[];
var size=20;
var speed=3;
var letter, rand, xposition, yposition;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 155, 55);
  textSize(32);
  textFont("Times"); 
}
function draw() {
  background(0, 155, 255);
  fill(255);
  noStroke();
  for(var i=0; i<wigglyLetters.length; i++){
     wigglyLetters[i].giggle();
     wigglyLetters[i].display();
  }
}
function mousePressed() {
 rand = int(random(65, 160));
 letter= char(rand);
 //text(letter, mouseX, mouseY);
 //new wiggle class : position x, positiony, size, letter, speed
 wigglyLetters.push(new Wiggle (mouseX, mouseY, size, letter, speed));
}
class Wiggle {
  // this sets up your elements in your class
  constructor(x, y, size, letter, speed){
    this.x=x;
    this.y=y;
    this.textSize=size;
    this.speed=speed;
    this.letter=letter;
  }
  // this updates the position &/or size &/oer... of each element
  giggle(){
    this.x+=random(-10, 10);
    this.y+=random(-10, 10);
    this.textSize+=random(-40, 40);

  }
  // draws the elements to the screen 
  display(){
    textSize(this.textSize);
    text(this.letter, this.x, this.y);
  }
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
