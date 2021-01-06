var trex, trex_running, trex_collided;
var ground;
var groungImage;
var is;
var cl;
var o1, o2, o3, o4, o5, o6;
var cactus;
var ob;
var gc;
var go;
var GS="play";
var tc;
var GO1,R1,GA1,RA1;
var scr=0;
var js1,cps2,ds3;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  cl = loadImage("cloud.png");
  o1 = loadImage("obstacle1.png");
   o2 = loadImage("obstacle2.png");
   o3 = loadImage("obstacle3.png");
   o4 = loadImage("obstacle4.png");
   o5 = loadImage("obstacle5.png");
   o6 = loadImage("obstacle6.png");
  tc = loadAnimation("trex_collided.png");
  GO1 = loadImage("gameOver.png");
  R1 = loadImage("restart.png");
  js1 = loadSound("jump.mp3");
  cps2 = loadSound("checkPoint.mp3")
  ds3 = loadSound("die.mp3");
  
  }

function setup() {
  createCanvas(600, 200);
  
  //create a trex sprite
  trex = createSprite(50,180,20,50);
  trex.addAnimation("chalu trex", trex_running);
   trex.addAnimation("mara hua trex", tc);
  
  GA1 = createSprite(300,70,20,20);
  GA1.addImage("khllas",GO1);
  
  RA1 = createSprite(300,130,20,20);
  RA1.addImage("Clik tu shuru",R1);
 
  
  

  gc = createGroup();
  go = createGroup();
  
  
  is = createSprite(300,190,600,10);
  is.visible = false;
  
  //adding scale and position to trex
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("GRND", groundImage);
  
}

  function draw() {
   // console.log(trex.y);
    background("white");
    text("Score:"+scr,500,40);
    
  
 
    if(scr>1000){
      GS="win";
      text("TREX BHI THKTA H PLZ USE \n BHI ARAM KRNE DO",200,100);
      trex.visible = false;
      ground.visible = false;
      ob.visible = false;
      c.visible = false;
      GA1.visible = false;
      RA1.visible = false;
      ground.velocityX=0;
      gc.destroyEach();
      go.destroyEach();
      cps2.stop();
      
    }
    
    if(GS=="play"){
        trex.changeAnimation("chalu trex", trex_running);
        GA1.visible = false;
        RA1.visible = false;
         ground.velocityX = -10;
      if(ground.x<0){
    ground.x=200;
        
        
    }
      if(scr>0 && scr%100==0){
        
        cps2.play();
      }
     scr=scr+1
        
    if(keyDown("space")&&(trex.y>=150)) {
      trex.velocityY = -10;
      js1.play();
    }
      trex.velocityY = trex.velocityY + 0.75;
      obstacle();
     cl1();
        trex.collide(is);
      if(trex.isTouching(go))
        {
          GS="end";
          ds3.play();
        }
    
    }
    
    
    if(GS=="end"){
        trex.collide(is);
        go.setVelocityXEach(0);
      gc.setVelocityXEach(0);
      ground.velocityX = 0;
    gc.setLifetimeEach(-5);
      go.setLifetimeEach(-5);
      trex.changeAnimation("mara hua trex",tc);
            
        GA1.visible = true;
        RA1.visible = true;
      trex.velocityY = trex.velocityY + 0.75;
      if(mousePressedOver(RA1)){
      GS="play";
         rt(); 
     
    }
 
    }
    
    
    
    
    //console.log(frameCount);
  trex.collide(is);
    drawSprites();
    
}

function rt(){
  GS="play";
  gc.destroyEach();
  go.destroyEach();
     scr=0
}



function cl1 (){
  if(frameCount%30==0){
    c = createSprite(550,50,10,10);
  c.addImage("aj",cl);
  c.velocityX = -10;
    c.y=Math.round(random(10,70))
   c.lifetime=400;
    gc.add(c);
}}
function obstacle(){
 if(frameCount%50==0){ 
   ob=createSprite(550,160,10,10);
   ob.scale=0.5;
  cactus=Math.round(random(1,6))
 // console.log(cactus);
  ob.velocityX = -10;
  switch(cactus){
    case 1:ob.addImage("hjkh",o1);
      break;
       case 2:ob.addImage("hjkh",o2);
      break;
       case 3:ob.addImage("hjkh",o3);
      break;
       case 4:ob.addImage("hjkh",o4);
      break;
       case 5:ob.addImage("hjkh",o5);
      break;
       case 6:ob.addImage("hjkh",o6);
      break;
       }
   ob.lifetime=400;
   go.add(ob);
}}