image_1=""
function back(){
window.location="index.html"}
function preload(){
image_1=loadImage("computer.jpg")
}
function setup(){
canvas_1=createCanvas(500,400)
canvas_1.center()
}
function draw(){
image(image_1,0,0,500,400)
}
