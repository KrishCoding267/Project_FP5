Webcam.set
({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function setup()
{
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function take_snapshot()
{
    save('Picture.png')
}
function preload()
{
    
}
function draw()
{
    image(video, 0, 0, 640, 480)
    fill("green");
    noFill();
    stroke("lightgreen");
    strokeWeight(25);
    rect(50, 50, 500, 350);
    fill("red");
    stroke("red");
    circle(50, 50, 70);
    fill("red");
    stroke("red");
    circle(50, 400, 70);
    fill("red");
    stroke("red");
    circle(550, 400, 70);
    fill("red");
    stroke("red");
    circle(550, 50, 70);
}