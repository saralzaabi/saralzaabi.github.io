var ellipseRadius = 100;
var img;
var lastX = 0;
var pxl;

function preload() {

    img = loadImage("pp.jpg");
}

function setup() {
    var cnv = createCanvas(2/3 * windowWidth, windowHeight);
    var x = (windowWidth - width)/2;
    var y = height * 1/2 - 100;

    cnv.position(x, y);

    smooth();
    noStroke();
    image (img, 70, 30, (width), height);
}

function draw() {
    pxl = get(mouseX, mouseY);
    fill(pxl);
    radius = min(ellipseRadius, abs(mouseX - lastX));
    ellipse(mouseX, mouseY, radius, radius);
    lastX = mouseX;
}
