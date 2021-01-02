const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var Gamestate=serve;
var serve,play ,end
var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    //getBackgroundImg();
    backgroundImg=loadImage("sprites/bg.png")
}

function setup(){
    var canvas = createCanvas(1400,400);
    engine = Engine.create();
    world = engine.world;
    

    ground = new Ground(600,400,2000,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    wall=new Ground(1200,200,10,20000)

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    Engine.update(engine);
if(Gamestate==serve){
    background(0)
    
    fill("white")
    text("1.Welcome to my Angrybirds game",200,50)
    text("2.This game is like the original but a little different",200,100)
text("3.Your task is to destroy all the pigs within 5 birds",200,150)
text("4.Each pig destroyed gives you 200 points ",200,200)
text("5.Click the space key to retrieve the bird to its original place",200,250)
text("6.Press the up arrow to continue",200,300)
}    
            if (Gamestate==play){
                
            background(backgroundImg);
            fill("white")
            text("Score  " + score, width-300, 50)
            box1.display();
            box2.display();
            ground.display();
            pig1.display();
            pig1.score();
            log1.display();
        
            box3.display();
            box4.display();
            pig3.display();
            pig3.score();
            log3.display();
        
            box5.display();
            log4.display();
            log5.display();
        
            bird.display();
            platform.display();
            //log6.display();
            slingshot.display();
            }
           
            if(score==400){
                Gamestate=end;
             }
                 
         
            
        
    
        noStroke();
        textSize(35)
        




    
   
    //strokeWeight(4);
   
   // console.log(bird.body.speed);    
}

function mouseDragged(){
    if (gameState!=="onsling"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 1){
       bird.trajectory = [];
       Matter.Body.setPosition(bird.body,{x:200, y:50});
       slingshot.attach(bird.body);
    }
    
}

//async function getBackgroundImg(){
  //  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //var responseJSON = await response.json();

    //var datetime = responseJSON.datetime;
    //var hour = datetime.slice(11,13);
    
    //if(hour>=06 && hour<=19){
      //  bg = "sprites/bg.png";
    //}
    //else{
      //  bg = "sprites/bg2.jpg";
    //}

    //backgroundImg = loadImage(bg);
    //console.log(backgroundImg);
//}