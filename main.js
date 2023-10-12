function preload(){

}
function draw(){
image(video, 61, 61, 390, 390);
fill(255, 0, 0);
stroke(255, 0, 0);
circle(50, 50, 50);
circle(450, 50, 50);
circle(50, 450, 50);
circle(450, 450, 50);
rect(75, 40, 350, 20)
rect(75, 440, 350, 20);
rect(440, 75, 20, 350)
rect(40, 75, 20, 350)
}
function setup(){
canvas = createCanvas(500, 500);
video = createCapture(VIDEO);
video.hide();
}