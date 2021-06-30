status = "";
objectDetector = "";
function preload() {
    loadSound("TF001.WAV");
}
function setup() {
    canvas = createCanvas(540, 320);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}
function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
}
function draw() {
    image(video, 0, 0, 540, 320);
}