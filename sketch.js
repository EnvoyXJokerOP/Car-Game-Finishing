var Gamestate=0
var database
var playercount
var player
var game
var form
var allplayers
var car1,car2,car3,car4,cars
 var car1img,car2img,car3img,car4img,groundimg,trackimg

function preload(){
car1img=loadImage("car1.png")
car2img=loadImage("car2.png")
car3img=loadImage("car3.png")
car4img=loadImage("car4.png")
groundimg=loadImage("ground.png")
trackimg=loadImage("track.jpg")






}



function setup(){
    database=firebase.database()
    createCanvas(windowWidth-50,windowHeight-50);
    game= new Game()
    game.getGamestate()
    game.start()
    
}

function draw(){
    background("white");
    if(playercount===4){
    game.updategamestate(1)
    }
if(Gamestate===1){
    clear()
game.play()
}
if(Gamestate===2){
game.End()
}
    
}
 
