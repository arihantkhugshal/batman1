var t1,t2,t3,t4
var thunder
var man
function preload(){
    t1=loadImage("images/thunderbolt/1.png")
    t2=loadImage("images/thunderbolt/2.png")
    t3=loadImage("images/thunderbolt/3.png")
    t4=loadImage("images/thunderbolt/4.png")
    m1=loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png")

}

function setup(){
    createCanvas(1800,700)
   thunder=createSprite(550,200,60,10)
    man=createSprite(750,500,50,50)
    man.addAnimation("man",m1)
    man.scale=0.5
}

function draw(){
   background(0)
   var Rand=Math.round(random(1,4))
   switch(Rand){
       case 1:thunder.addImage(t1)
      thunder.scale=0.5 
      break;
       case 2:thunder.addImage(t2)
       thunder.scale=0.5 
       break;
       case 3:thunder.addImage(t3)
       thunder.scale=0.5 
        break;
       case 4:thunder.addImage(t4)
       thunder.scale=0.5 
         break;
   }
   drawSprites()
}   

