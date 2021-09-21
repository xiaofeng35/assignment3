//circle
let circle_y = 185; // Step 1 and Step 2 can be combined
let speed01 = 3;

//blackrect
let blackrect = 300;
let speed02 = 6;

//bottomrect
let angle = 0;
let boxColor01 = 152;
let colorChange = 1;
let bgColor = 0;


//rotated side rect
let boxColor02 = 254;

//blackband
let blackband_Dim = 60;
let blackband_Scale = 1;

//button
let button_x = 40
let button_y = 70
let growth = 1

//button back
let buttonback_x = 58
let buttonback_y = 90



function setup() {
  createCanvas(600, 600);
   rectMode(CENTER)
  ellipseMode(CENTER)
 noStroke();
  angleMode(DEGREES);
}


function draw() {
  background(000);

//circle

fill(color(152));
if (circle_y > 400 || circle_y < 0) {
    speed01 = speed01*-1;
  }
  circle_y = circle_y + speed01;
circle(300, circle_y, 296)


//blackrect
fill(color(0));
if (blackrect > 600 || blackrect < 0) {
    speed02 = speed02*-1;
  }
  blackrect = blackrect + speed02;
rect(blackrect, 208, 300, 313);

//bottomrect
if (boxColor01 > 152 || boxColor01 < bgColor) {
    colorChange = -colorChange;
  }
  boxColor01 = boxColor01 + colorChange;

fill(boxColor01);
push();
translate(300, 362);
rotate(angle);

rect(0, 0, 140, 400, 5, 5, 3, 3);
pop();
angle++;


//upperrect

fill(color(152));
push();
translate(300, 0);
rotate(angle);
angle++;
rect(0, 104, 140, 110, 15, 15, 3, 3);
pop();



//rotated side rect
fill(boxColor02);
if (boxColor02 > 255 || boxColor02 < bgColor) {
    colorChange = -colorChange;
  }
  boxColor02 = boxColor02 + colorChange;

push()
    translate(398, 70);
    rotate(angle);
    rect(0, 0, 60, 70, 5);
pop();
angle++;

push()
    translate(202, 70);
    rotate(angle*-1);
    rect(0, 0, 60, 70, 5);
pop()





fill(boxColor01);
if (buttonback_x > 150 || buttonback_x < 58) {
    blackband_Scale = blackband_Scale*-1;
  }
  buttonback_x = buttonback_x + blackband_Scale;
if (buttonback_y > 200|| buttonback_y < 90) {
    blackband_Scale = blackband_Scale*-1;
    }
    buttonback_y = buttonback_y + blackband_Scale;
rect(300, 114, buttonback_x, buttonback_y, 20, 20, 0, 0);


fill(boxColor02);
rect(300, 119, 40, 78, 10, 10, 0, 0);

//button
fill(color(200));
if (button_x > 110 || button_x < 40) {
    growth = growth*-1;
  }
  button_x = button_x + growth;

if (button_y > 100 || button_y < 70) {
    growth = growth*-1;
  }
  button_y = button_y + growth;

rect(300, 116, button_x, button_y, 10, 10, 10, 10);


fill(color(50));
push()
    translate(300, 140);
    rotate(angle*-1);
    rect(0, 0, 30, 8, 4, 4, 4, 4)
pop()




fill(color(70));
push()
    translate(300, 132);
    rotate(angle*-1);
    rect(0, 132, 36, 34, 0, 7, 7, 0)
pop()



fill(boxColor02);
push()
    translate(333, 132);
    rotate(angle*-1);
    rect(0, 132, 6, 33, 3)

pop()

push()
    translate(355, 132);
    rotate(angle*-1);
    rect(0, 132, 6, 33, 3)

pop()


//blackband
fill(boxColor02);
if (blackband_Dim > 100 || blackband_Dim < 50) {
    blackband_Scale = blackband_Scale*-1;
  }
  blackband_Dim = blackband_Dim + blackband_Scale;

rect(255, 104, blackband_Dim, 2);

rect(345, 104, blackband_Dim, 2);

}
