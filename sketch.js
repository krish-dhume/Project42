var issImage,spacebgImage,spacecraftImage,spacecraftImage2,spacecraftImage3,spacecraftImage4;
function preload(){
  issImage=loadImage("iss.png");
  spacebgImage=loadImage("spacebg.jpg")
  spacecraftImage=loadImage("spacecraft1.png")
  spacecraftImage2=loadImage("spacecraft2.png")
  spacecraftImage3=loadImage("spacecraft3.png")
  spacecraftImage4=loadImage("spacecraft4.png")
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  
}


function draw() {
  background(spacebgImage);  
  
}