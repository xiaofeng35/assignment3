let angle = 0;
let speed = 0.5
//
// let button_x = 40;
// let button_y = 70;
let growth = 0.2;
//
let boxColor01 = 152;
let colorChange = 1;
let bgColor = 0;
let boxColor02 = 254;

let circle01 = {
action:rotatecircle,
posx: 100,
posy:-200,
translatex:300-100, translatey:185+200,
dim:296,
color:152,
angle:0,
speed:1
}

let backrect = {
action: rotaterect,
posx:0,
posy:0,
translatex:300,
translatey:208,
width:300,
height: 313,
color:0 }

let rectbottom = {
action: rotaterect,
posx:0,
posy:0,
orginx:300,
translatex:300,
translatey:362,
width:140,
height:400,
topleft:5 ,
topright:5,
bottomright:3,
bottomleft:3,
color:152}

let recttop = {
action: rotaterect,
posx:100,
posy:-100,
translatex:300-100,
translatey:104+100,
width:140,
height:110,
topleft:15 ,
topright:15,
bottomright:3,
bottomleft:3,
color:152,}

let rect01 = {
  action: rotatedrect,

  posx:0, posy:0,translatex:398, translatey:70, width:60, height:70,topleft:5 , topright:5, bottomright:5, bottomleft:5, color:0, rotate:175}

let rect02 = {
  action: rotatedrect,

  posx:0, posy:0,translatex:202, translatey:70, width:60, height:70, topleft:5 , topright:5, bottomright:5, bottomleft:5, color:1,rotate:-175}

let rect03 = {
  action: rotaterect,
  posx:-100, posy:100,translatex:300+100, translatey:114-100, width:58, height:90,topleft:20 , topright:20, bottomright:0, bottomleft:0,  color:50}

let rect04 = {
  action: rotaterect,
  posx:-50, posy:-50,translatex:300+50, translatey:119+50, width:40, height:78,topleft:10 , topright:10, bottomright:0, bottomleft:0,  color:100}

let rect05 = {
action:scalerect,
posx:300, posy:116,width:40, height:70, button_x:40, button_y:70, topleft:10 , topright:10, bottomright:10, bottomleft:10,  color:200}

let rect06 = {
  action: rotaterect,
  coloraction: colorchange,
  posx:0, posy:0,translatex:300, translatey:140, width:30, height:8, topleft:4 , topright:4, bottomright:4, bottomleft:4,  color:255}

let rect07 = {  action:draw,
coloraction: colorchange,

  posx:347, posy:132, width:36, height:34,topleft:0 , topright:7, bottomright:7, bottomleft:0,  color:50}

let rect08 = {  action:draw,
coloraction: colorchange,
  posx:333, posy:132, width:6, height:33, topleft:3 , topright:3, bottomright:3, bottomleft:3, color:200}

let rect09 = {  action:draw,
coloraction: colorchange,
  posx:355, posy:132, width:6, height:33, topleft:3 , topright:3, bottomright:3, bottomleft:3, color:200}

let rect10 = {
  action:scalerect,
      action:draw,
    coloraction: colorchange,
    button_x:50, button_y:2,
    posx:255, posy:104, width:50, height:2, color:0}

let rect11 = {
  action:scalerect,
  action:draw,
  coloraction: colorchange,
  button_x:50, button_y:2,
  posx:345, posy:104, width:50, height:2, color:0}

let shapeArray = [circle01,backrect,rectbottom,recttop,rect01,rect02,rect03,rect04,rect05,rect06,rect07,rect08,rect09,rect10,rect11 ]

function setup() {
song=loadSound('clock-ticking-5.mp3');
createCanvas(600, 600);
rectMode(CENTER)
ellipseMode(CENTER)
noStroke();
angleMode(DEGREES);


}

function draw() {
background(000);

for (let i = 0; i < shapeArray.length; i++) {
drawshape(shapeArray[i]);
}


}

function drawshape(geometry){
  if(geometry.action === rotatecircle){rotatecircle(geometry)}
  if(geometry.action === rotaterect){rotaterect(geometry)}
  if(geometry.coloraction === colorchange){colorchange(geometry)}
  if(geometry.action === scalerect){scalerect(geometry)}
  if(geometry.action === rotatedrect){rotatedrect(geometry)}
  if(geometry.action === draw){drawrect(geometry)}


}


function rotatecircle(geometry){
fill(geometry.color);
push();
translate(geometry.translatex, geometry.translatey);
rotate(geometry.angle);
circle(geometry.posx, geometry.posy, geometry.dim)
pop();

geometry.angle = geometry.angle + geometry.speed
if (geometry.angle === 360) {
geometry.speed = 0;
geometry.angle = 0;
}
}

function rotaterect(geometry){
fill(geometry.color);
push();
translate(geometry.translatex, geometry.translatey);
rotate(angle);
rect(geometry.posx, geometry.posy, geometry.width,geometry.height,geometry.topleft,geometry.topright,geometry.bottomright,geometry.bottomleft);
pop();
angle=angle+speed;
if (angle === 1080) {
speed = 0;
angle = 0;
}
}

function rotatedrect(geometry){
fill(geometry.color);
push();
translate(geometry.translatex, geometry.translatey);
rotate(angle+geometry.rotate);
rect(geometry.posx, geometry.posy, geometry.width,geometry.height,geometry.topleft,geometry.topright,geometry.bottomright,geometry.bottomleft);
pop();
angle=angle+speed;
if (angle === 720) {
speed = 0;
angle = 0;
}
}

function colorchange(geometry){

if (geometry.color > 255 || geometry.color < bgColor) {
colorChange = -colorChange;
}
geometry.color = geometry.color +colorChange



}

function drawrect(geometry){
  fill(geometry.color)
  rect(geometry.posx, geometry.posy, geometry.width,geometry.height,geometry.topleft,geometry.topright,geometry.bottomright,geometry.bottomleft);
}

function mouseClicked() {
ellipse(mouseX, mouseY, 5, 5);
circle01.speed = 1;
speed= 1;
grow=1;

// prevent default
return false;
}


function scalerect(geometry) {
  fill(color(200));
  if (geometry.button_x > 110 || geometry.button_x < 40) {
      growth = growth*-1;
    }
    geometry.button_x = geometry.button_x + growth;

  if (geometry.button_y > 100 || geometry.button_y < 70) {
      growth = growth*-1;
    }
    geometry.button_y = geometry.button_y + growth;
  rect(geometry.posx, geometry.posy, geometry.button_x, geometry.button_y,geometry.topleft,geometry.topright,geometry.bottomright,geometry.bottomleft);

  // if(geometry.button_x===geometry.width){geometry.button_x=geometry.width}
  // if(geometry.button_y===geometry.height){geometry.button_x=geometry.width}
}

function mousePressed() {
  if (angle=0) {
    song.stop();
  } else {
    song.play();
    background(255);
  }
}



//
// fill(color(152));
// push();
// translate(300, 300);
// rotate(angle);
// circle(300, 185, 296)
// pop();
// angle++;
//
//
// fill(color(0));
// push();
// translate(300, 208);
// rotate(angle);
// rect(0, 0, 300, 313);
// pop();
// angle++;
//  // rect(rectbottom)
// fill(color(152));
// push();
// translate(300, 362);
// rotate(angle);
// rect(0, 0, 140, 400, 5, 5, 3, 3);
// pop();
// angle++;


// fill(boxColor01);
// if (boxColor01 > 152 || boxColor01 < bgColor) {
//     colorChange = -colorChange;
//   }
//   boxColor01 = boxColor01 + colorChange;
// push();
// translate(300, 104);
// rotate(angle);
// rect(300, 104, 140, 110, 15, 15, 3, 3);
// pop();
// angle--;


// fill(boxColor01);
//
// push();
// translate(300, 100);
// rotate(angle);
// push()
//     translate(398, 70);
//     rotate(175);
//     rect(0, 0, 60, 70, 5);
// pop()
// push()
//     translate(202, 70);
//     rotate(-175);
//     rect(0, 0, 60, 70, 5);
// pop()
// pop();
// angle++;

// push();
// translate(300, 111);
// rotate(angle);
// fill(color(50));
// rect(300, 114, 58, 90, 20, 20, 0, 0);
//
// fill(color(100));
// rect(300, 119, 40, 78, 10, 10, 0, 0);
// pop();
// angle--;



// fill(color(200));
// if (button_x > 110 || button_x < 40) {
//     growth = growth*-1;
//   }
//   button_x = button_x + growth;
//
// if (button_y > 100 || button_y < 70) {
//     growth = growth*-1;
//   }
//   button_y = button_y + growth;
// rect(300, 116, button_x, button_y, 10, 10, 10, 10);

//
//
// fill(boxColor02);
// if (boxColor02 > 255 || boxColor02 < bgColor) {
//     colorChange = -colorChange;
//   }
//   boxColor02 = boxColor02 + colorChange;
// rect(300, 140, 30, 8, 4, 4, 4, 4)
//
// fill(boxColor02);
// rect(347, 132, 36, 34, 0, 7, 7, 0)

//
// fill(boxColor01);
// rect(333, 132, 6, 33, 3)
// rect(355, 132, 6, 33, 3)


// fill(boxColor01);
// rect(255, 104, 50, 2);
// rect(345, 104, 50, 2);
//
