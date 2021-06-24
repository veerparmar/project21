var canvas;
var music;
var box1, box2,box3,box4,box5;
function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
box1=createSprite((random(20,750)),200,20,20)
edges=createEdgeSprites();
box2=createSprite(0,580,360,30)
box3=createSprite(295,580,200,30)
box4=createSprite(515,580,200,30)
box5=createSprite(740,580,220,30)
box2.shapeColor="blue"
box3.shapeColor="orange"
box4.shapeColor="red"
box5.shapeColor="green"
    //create box sprite and give velocity
box1.velocityY=7;
box1.velocityX=7;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
if(box1.isTouching(box2)&&box1.bounceOff(box2)){
    box1.shapeColor="blue";
}
if(box1.isTouching(box3)&&box1.bounceOff(box3)){
    box1.shapeColor="orange";
}
if(box1.isTouching(box4)&&box1.bounceOff(box4)){
    box1.shapeColor="red";
}
if(box1.isTouching(box5)&&box1.bounceOff(box5)){
    box1.shapeColor="green";
}

box1.bounceOff(edges)

    //add condition to check if box touching surface and make it box
    drawSprites();
}
