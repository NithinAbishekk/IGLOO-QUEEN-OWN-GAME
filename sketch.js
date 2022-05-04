var edges;
var bgImg,bg;
var playImg,playButton;
var settingsButton,settingsButtonImg;

var storyButton,storyButtonImg;
var storyBg,storyBgImg;
var controlButton,controlButtonImg;
var controlBg,controlBgImg;
var backButton1,backButton2,backButton3,backButtonImg;

var texte,textImg;
var arrows,arrowsImg;


var snowImg,snow;
var gameState = "start";

var levelOneBg,levelOneImg,levelTwoBg,levelTwoImg;
var levelThreeBg,levelThreeImg,levelFourBg,levelFourImg;
var endBg,endImg;

var iglooImg,igloo1,iglooOpen1,igloo2,iglooOpen2,igloo3,iglooOpen3;
var penguinImg,penguin1,penguin2,penguin3;

var land1,land2,land3,land4,land5,land6;
var land1Img,land2Img,land3Img,land4Img;
var path1,path2,path3,path4,path5,path6;
var way1,way2,way3,way4,way5,way6,way7;
var wall1,wall2,wall3,wall4,wall1Img,wall2Img;
var track1,track2,track3,track4,track5,track6,track7
   ,track8,track9,track10,track11,track12,track13
   ,track14,track15;

var seal1,seal2,seal1Img,seal2Img;
var icicle,icicleImg;
var snowBall1,snowBall2;
var snowBall1Disappear = 0;
var snowBall2Disappear = 0;
var seal1Disappear = 0;
var seal2Disappear = 0;
var enemy1Disappear = 0;
var crack1Disappear = 0;
var crack2Disappear = 0;
var storm1Disappear = 0;
var storm2Disappear = 0;
var sun,sunImg,sunRay,sunRayImg;
var hotWater1,hotWater2,hotWaterImg;
var horn1Img,horn1,horn2,horn3;
var enemy1,enemy1Img;
var crack1,crack2,crackImg;
var storm1,storm2,stormImg;

var crownImg,crown1,crown2,crown3,crown4,crown5,crown6;
var fishImg,fish1,fish2,fish3,fish4,fish5,fish6,fish7,fish8,fish9,fish10;
var squid1Img,squid2Img,squid3Img,squid4Img,squid5Img,squid1,squid2,squid3,squid4,squid5,squid6,squid7,squid8;
var squid10,squid11,squid12,squid13,squid14,squid15,squid16,squid17,squid18,squid19,squid20;
var cone1,cone2,cone3,cone4,cone5,cone7,cone8,cone9,cone10,cone11,cone12,cone1Img,cone2Img,cone3Img,cone4Img,cone5Img,cone6Img;

var lev1Life1,lev1Life2,lev1Life3,lifeImg;
var lev2Life1,lev2Life2,lev2Life3;
var lev3Life1,lev3Life2,lev3Life3;
var lev4Life1,lev4Life2,lev4Life3;

var level1Life = 3;
var level2Life = 3;
var level3Life = 3;
var level4Life = 5;
var level1Score = 0;
var level2Score = 0;
var level3Score = 0;
var level4Score = 0;

var sd = 0;

var bgSound,collectSound,loseSound,winSound,crackSound,gameOverSound,mystrySound,stormSound,hotWaterSound;

var gameOverImg,gameOver,restart,restartImg;

function preload(){

 bgImg = loadImage("images/backtitle.png");
 playImg = loadImage("images/playbutton.png");
 settingsButtonImg = loadImage("images/settings.png");
 settingsBgImg = loadImage("images/settingsBg3.jpg");
 backButtonImg = loadImage("images/arrow.png");
 storyButtonImg = loadImage("images/storyButton.png");
 controlButtonImg = loadImage("images/controlButton.png");
 snowImg = loadImage("images/snowballs.png");

 storyBgImg = loadImage("images/storyBg.jpg");
 textImg = loadImage("images/textImg.png");
 arrowsImg = loadImage("images/control.png");

 controlBgImg = loadImage("images/controlBg.jfif");

 levelOneImg = loadImage("images/iceland1.jpg");
 levelTwoImg = loadImage("images/iceland2.jpg");
 levelThreeImg = loadImage("images/iceland3.png");
 levelFourImg = loadImage("images/iceland4.jpg");
 endImg = loadImage("images/endbg.png");
 iglooImg = loadImage("images/igloos.png");
 penguinImg = loadImage("images/penqueens.png");
 land1Img = loadImage("images/land1.png");
 land2Img = loadImage("images/land2.png");
 land3Img = loadImage("images/land3.png");
 land5Img = loadImage("images/land4.png");
 land6Img = loadImage("images/land5.png");
 wall1Img = loadImage("images/iceWall1.jpg");
 wall2Img = loadImage("images/iceWall2.jpg");
 seal1Img = loadImage("images/angryseal.png");
 seal2Img = loadImage("images/sealr.png");
 icicleImg = loadImage("images/icicle1.png");
 sunImg = loadImage("images/sun.png");
 sunRayImg = loadImage("images/sunRays.png");
 hotWaterImg = loadImage("images/hotWater.png");
 horn1Img = loadImage("images/horn1.png");
 horn2Img = loadImage("images/horn2.png");
 enemy1Img = loadImage("images/enemy1.png");
 crackImg = loadImage("images/crack.png");
 stormImg = loadAnimation("images/storm0.png","images/storm1.png","images/storm2.png","images/storm3.png","images/storm4.png",
                          "images/storm5.png", "images/storm6.png","images/storm7.png","images/storm8.png","images/storm9.png",
                          "images/storm10.png","images/storm11.png","images/storm12.png","images/storm13.png","images/storm14.png",
                          "images/storm15.png","images/storm16.png","images/storm17.png","images/storm18.png","images/storm19.png",
                          "images/storm20.png","images/storm21.png","images/storm22.png","images/storm23.png","images/storm24.png",
                          "images/storm25.png","images/storm26.png","images/storm27.png","images/storm28.png","images/storm29.png");
 crownImg = loadImage("images/crown.png");
 fishImg = loadImage("images/fish.png");
 squid1Img = loadImage("images/squid1.png");
 squid2Img = loadImage("images/squid2.png");
 squid3Img = loadImage("images/squid3.png");
 squid4Img = loadImage("images/squid4.png");
 squid5Img = loadImage("images/squid5.png");
 cone2Img = loadImage("images/cone2.png");
 cone4Img = loadImage("images/cone9.png");
 cone6Img = loadImage("images/cone6.png");
 cone7Img = loadImage("images/cone7.png");
 cone8Img = loadImage("images/cone8.png");
 lifeImg = loadImage("images/heart.png");
 gameOverImg = loadImage("images/gameOver.png");
 restartImg = loadImage("images/restart.png");

 bgSound = loadSound("sounds/bgSound.mp3");
 collectSound = loadSound("sounds/collectSound.mp3");
 loseSound = loadSound("sounds/loseSound.mp3");
 winSound = loadSound("sounds/winSound.mp3");
 crackSound = loadSound("sounds/crackSound.mp3");
 gameOverSound = loadSound("sounds/gameOverSound.mp3");
 stormSound = loadSound("sounds/stormsound.wav");
 hotWaterSound = loadSound("sounds/hotwater.wav");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  edges = createEdgeSprites();

  setStart();
  setLevelOne();
  setLevelTwo();
  setLevelThree();
  setLevelFour();
  setEnd();

  setSettings();
  setStory();
  setControls();

  bgSound.loop();
     
}

function draw() {
  background("#159FBC");  
  drawSprites();
  if( gameState === "start"){
    levelStart();
  }else if(gameState === "levelOne"){
    levelOne();
  }else if(gameState === "levelTwo"){
    levelTwo();
  }else if(gameState === "levelThree"){
    levelThree();
  }else if(gameState === "levelFour"){
    levelFour();
  } else if(gameState === "end"){
    end();
  }
  
  if(gameState === "settings"){
     settings();
  }else if(gameState === "story"){
     story();
  }else if(gameState === "control"){
     controls();
  }
 }

function setStart(){

  bg = createSprite(windowWidth/2,windowHeight/2,width,height);
  bg.addImage("background",bgImg);
  bg.scale = 1.163;
  bg.visible = false;

  playButton = createSprite(windowWidth/2,windowHeight/2);
  playButton.addImage(playImg);
  playButton.scale = 0.2;
  playButton.visible = false;

  settingsButton = createSprite(windowWidth-50,windowHeight-680);
  settingsButton.addImage(settingsButtonImg);
  settingsButton.scale = 0.16;
  settingsButton.visible = false;
}

function levelStart(){

  bg.visible = true;
  playButton.visible = true;
  settingsButton.visible = true;
  settingsBg.visible = false;
  backButton1.visible = false;
  storyButton.visible = false;
  controlButton.visible = false;
  storyBg.visible = false;
  backButton2.visible = false;
  texte.visible = false;
  arrows.visible = false;

   if(mousePressedOver(playButton) ){
    //------------------------------------------
     gameState = "levelOne";//------------------
   }//------------------------------------------

   if(mousePressedOver(settingsButton) ){
    gameState = "settings"; 
   }
}

function setSettings(){

  settingsBg = createSprite(windowWidth/2,windowHeight/2);
  settingsBg.addImage(settingsBgImg);
  settingsBg.scale = 2.8;
  settingsBg.visible = false;

  backButton1 = createSprite(windowWidth-1500,windowHeight-40);
  backButton1.addImage(backButtonImg);
  backButton1.scale = 0.8
  backButton1.mirrorX(-1);
  backButton1.visible = false;

  storyButton = createSprite(windowWidth/2,windowHeight-270);
  storyButton.addImage(storyButtonImg);
  storyButton.scale = 0.3;
  storyButton.visible = false;

  controlButton = createSprite(windowWidth/2,windowHeight- 150);
  controlButton.addImage(controlButtonImg);
  controlButton.scale = 0.3;
  controlButton.visible = false;
}

function settings(){
 
  settingsBg.visible = true;
  bg.visible = false;
  playButton.visible = false;
  settingsButton.visible = false;
  storyBg.visible = false;
  backButton2.visible = false;
  texte.visible = false;
  controlBg.visible = false;
  backButton3.visible = false;
  arrows.visible = false;

  backButton1.visible = true;
  storyButton.visible = true;
  controlButton.visible = true;


  if(mousePressedOver(backButton1)){
     gameState = "start";
  }

  if(mousePressedOver(storyButton)){
    gameState = "story";
  }

  if(mousePressedOver(controlButton)){
    gameState = "control";
  }

}

function setStory(){
 
  storyBg = createSprite(windowWidth/2,windowHeight/2);
  storyBg.addImage(storyBgImg);
  storyBg.visible = false; 

  backButton2 = createSprite(windowWidth-1500,windowHeight-680);
  backButton2.addImage(backButtonImg);
  backButton2.scale = 0.8
  backButton2.mirrorX(-1);
  backButton2.visible = false;

  texte = createSprite(windowWidth - 670,windowHeight/2);
  texte.addImage(textImg);
  texte.scale = 0.7;
  texte.visible = false;
}

function story(){

  storyBg.visible = true;
  bg.visible = false;
  playButton.visible = false;
  settingsButton.visible = false;
  settingsBg.visible = false;
  backButton1.visible = false;
  storyButton.visible = false;
  controlButton.visible = false;
  controlBg.visible = false;
  backButton3.visible = false;
  arrows.visible = false;

  backButton2.visible = true;
  texte.visible = true;

  if(mousePressedOver(backButton2)){
    gameState = "settings";
 }
}

function setControls(){

  controlBg = createSprite(windowWidth/2,windowHeight/2);
  controlBg.addImage(controlBgImg);
  controlBg.scale = 5.5;
  controlBg.visible = false;

  backButton3 = createSprite(windowWidth-1500,windowHeight/2);
  backButton3.addImage(backButtonImg);
  backButton3.scale = 0.8;
  backButton3.mirrorX(-1);
  backButton3.visible = false;

  arrows = createSprite(windowWidth/2,windowHeight/2);
  arrows.addImage(arrowsImg);
  arrows.scale = 1.7;
  arrows.visible = false;

}

function controls(){

  controlBg.visible = true;
  bg.visible = false;
  playButton.visible = false;
  settingsButton.visible = false;
  backButton1.visible = false;
  storyButton.visible = false;
  storyBg.visible = false;
  controlButton.visible = false;
  backButton2.visible = false;

  texte.visible = true;
  backButton3.visible = true;
  arrows.visible = true;

  if(mousePressedOver(backButton3)){
    gameState = "settings";
 }

}

function setLevelOne(){
      
     levelOneBg = createSprite(windowWidth/2,windowHeight/2,width,height);
     levelOneBg.addImage(levelOneImg);
     levelOneBg.scale = 2.6;
     levelOneBg.visible = false;

     igloo1 = createSprite(windowWidth-230,windowHeight-70);
     igloo1.addImage(iglooImg);
     igloo1.visible = false;
     //igloo.debug = true;
     igloo1.setCollider("rectangle",0,0,150,110);

     iglooOpen1 = createSprite(windowWidth-305,windowHeight-30,30,40);
     iglooOpen1.visible = false;

     land1 = createSprite(windowWidth/2+550,windowHeight/2-200,400,30);
     land1.addImage(land1Img);
     land1.visible = false;
     //land1.debug = true;
     land1.setCollider("rectangle",0,10,550,40);

     land2 = createSprite(windowWidth/2+20,windowHeight/2-190);
     land2.addImage(land2Img);
     land2.visible = false;
     //land2.debug = true;
     land2.setCollider("rectangle",0,0,250,40);

     land3 = createSprite(windowWidth/2-450,windowHeight/2 +150);
     land3.addImage(land1Img);
     land3.visible = false;
    // land3.debug = true;
     land3.setCollider("rectangle",0,10,550,40);

     land4 = createSprite(windowWidth/2 - 250,windowHeight/2-20);
     land4.addImage(land2Img);
     land4.visible = false;
     //land4.debug = true;
     land4.setCollider("rectangle",0,0,250,40);

     land5 = createSprite(windowWidth/2-70,windowHeight/2 + 370);
     land5.addImage(land1Img);
     land5.visible = false;
     //land5.debug = true;
     land5.setCollider("rectangle",0,10,550,40);

     land6 = createSprite(windowWidth/2+330,windowHeight/2+380);
     land6.addImage(land2Img);
     land6.visible = false;
     //land6.debug = true;
     land6.setCollider("rectangle",0,0,250,40);

     penguin1 = createSprite(windowWidth - 100,windowHeight -1000);
     penguin1.addImage(penguinImg);
     penguin1.scale = 0.1;
     penguin1.visible = false;
      
     crown2 = createSprite(windowWidth-1450,windowHeight -240);
     crown2.addImage(crownImg);
     crown2.scale = 0.2;
     crown2.visible = false;

     crown4 = createSprite(windowWidth - 1000,windowHeight - 240);
     crown4.addImage(crownImg);
     crown4.scale = 0.2;
     crown4.visible = false;
     
     seal1 = createSprite(windowWidth -1175,windowHeight/2 + 100);
     seal1.addImage(seal1Img);
     seal1.scale = 0.5;
     //seal1.velocityX = -3;
     seal1.visible = false;
     //seal1.debug  =true;

     seal2 = createSprite(windowWidth -1100,windowHeight - 50 );
     seal2.addImage(seal2Img);
     seal2.scale = 0.5;
    // seal2.velocityX = 3;
     //seal2.debug  =true;
     seal2.visible = false;

     crown1 = createSprite(windowWidth-920,windowHeight -430);
     crown1.addImage(crownImg);
     crown1.scale = 0.2;
     crown1.visible = false;

     crown3 = createSprite(windowWidth - 750,windowHeight - 680);
     crown3.addImage(crownImg);
     crown3.scale = 0.2;
     crown3.visible = false;

     crown5 = createSprite(windowWidth - 800,windowHeight - 680);
     crown5.addImage(crownImg);
     crown5.scale = 0.2;
     crown5.visible = false;

     crown6 = createSprite(windowWidth - 700,windowHeight - 680);
     crown6.addImage(crownImg);
     crown6.scale = 0.2;
     crown6.visible = false;

     lev1Life1 = createSprite(windowWidth-1300,windowHeight-650,20,20);
     lev1Life1.addImage(lifeImg);
     lev1Life1.scale = 0.1;
     lev1Life1.visible = false;
     lev1Life2 = createSprite(windowWidth-1250,windowHeight-650,20,20);
     lev1Life2.addImage(lifeImg);
     lev1Life2.scale = 0.1;
     lev1Life2.visible = false;
     lev1Life3 = createSprite(windowWidth-1200,windowHeight-650,20,20);
     lev1Life3.addImage(lifeImg);
     lev1Life3.scale = 0.1;
     lev1Life3.visible = false;

     gameOver = createSprite(windowWidth/2,windowHeight/2);
     gameOver.addImage(gameOverImg);
     gameOver.scale = 0.5;
     gameOver.visible = false;

     restart = createSprite(windowWidth - 750,windowHeight-180);
     restart.addImage(restartImg);
     restart.scale = 0.3;
     restart.visible = false;
}

function level1PenguinLife(){

  if(penguin1.isTouching(seal1)){
    loseSound.play();
    level1Life = level1Life - 1;    
    penguin1.x =  windowWidth - 100;  
    penguin1.y =  windowHeight -1000;
  }

  if(penguin1.isTouching(seal2)){
    loseSound.play();
    level1Life = level1Life - 1; 
    penguin1.x =  windowWidth - 100;  
    penguin1.y =  windowHeight -1000;
  }

  if(penguin1.y >= windowHeight){
    loseSound.play();
    level1Life = level1Life -1;
    penguin1.x =  windowWidth - 100;  
    penguin1.y =  windowHeight -1000;

  }
  if(level1Life === 2){
    lev1Life3.destroy();
  }
  if(level1Life === 1){
    lev1Life2.destroy();
  }
  if(level1Life === 0){
    lev1Life1.destroy();
    penguin1.destroy();
    gameOver.visible = true;
    restart.visible = true;
    seal1.destroy();
    seal2.destroy();

    if(mousePressedOver(restart)){
      gameState = "levelOne";
      level1Life = 3;
      level1Score = 0;
      seal1Disappear = 0;
      seal2Disappear = 0;
      gameOver.destroy();
      restart.destroy();
      setLevelOne();
    }
   }
}

function level1PenguinScore(){
 
  fill("black");
  textFont("algerian");
  textSize(30);
  text("Crowns : " + level1Score,450,80);

  if(penguin1.isTouching(crown1)){
    collectSound.play();
    crown1.destroy();
    level1Score = level1Score +1;
    textSize(50);
  }

  if(penguin1.isTouching(crown2)){
    collectSound.play();
    crown2.destroy();
    level1Score = level1Score+1;
    textSize(50);
  }

  if(penguin1.isTouching(crown3)){
    collectSound.play();
    crown3.destroy();
    level1Score = level1Score +1;
    textSize(50);
  }

  if(penguin1.isTouching(crown4)){
    collectSound.play();
    crown4.destroy();
    level1Score = level1Score +1;
    textSize(50);
  }

  if(penguin1.isTouching(crown5)){
    collectSound.play();
    crown5.destroy();
    level1Score = level1Score +1;
    textSize(50);
  }

  if(penguin1.isTouching(crown6)){
    collectSound.play();
    crown6.destroy();
    level1Score = level1Score +1;
    textSize(50);
  }

  if(level1Score === 6){
      
    if(penguin1.isTouching(iglooOpen1)){
      //add sound
     // bgSound.stop();
     setLevelTwo();
     gameState = "levelTwo";
      winSound.play();
      
    }
  }

  if(level1Score != 6){
    if(penguin1.isTouching(iglooOpen1)){
      textSize(50); 
      textFont("jokerman");
      fill(255, 212, 0);
      stroke("black");
      strokeWeight(7);
      text("NOT  YET  BECAME  A  QUEEN",windowWidth-1100,windowHeight/2);
     }
  }
}



function sealMovement(){
   
  if(seal1Disappear === 0 ){
    seal1.velocityX = -3; 
    seal1.mirrorX(1);
  }

  if(seal1.x < (windowWidth -1450)){
    seal1.velocityX = 3;
    seal1.mirrorX(-1);
    seal1Disappear = -1;

  }else if(seal1.x > (windowWidth -1000)){
      seal1.velocityX = -3;
      seal1.mirrorX(1);
      seal1Disappear = 0;
  }

  //------------------------------------------

  if(seal2Disappear === 0 ){
    seal2.velocityX = -3; 
    seal2.mirrorX(-1);
  }

  if(seal2.x < (windowWidth -1000)){
    seal2.velocityX = 3;
    seal2.mirrorX(1);
    seal2Disappear = -1;

  }else if(seal2.x > (windowWidth -600)){
      seal2.velocityX = -3;
      seal2.mirrorX(-1);
      seal2Disappear = 0;
  }
}

function levelOne(){

  penguin1.bounceOff(edges[0]);
  penguin1.bounceOff(edges[1]);
  //console.log(penguin1.y);
  if(frameCount % 5 === 0){
    snow = createSprite(500,1,20,20);
    snow.x = Math.round(random(1,windowWidth));
    //console.log(snow.x);
    snow.addImage(snowImg);
    snow.scale = 0.07;
    snow.velocityY = 7;
    snow.lifetime = 102;
  }

  level1PenguinScore();

  levelOneBg.visible = true;
  bg.destroy();
  playButton.destroy();

  igloo1.visible = true;
  penguin1.collide(igloo1);
  iglooOpen1.visible = false;

  penguin1.visible = true;
  seal1.visible = true;
  seal2.visible = true;

  land1.visible = true;
  penguin1.collide(land1);

  land2.visible = true;
  penguin1.collide(land2);

  land3.visible = true;
  penguin1.collide(land3);

  land4.visible = true;
  penguin1.collide(land4);

  land5.visible = true;
  penguin1.collide(land5);

  land6.visible = true;
  penguin1.collide(land6);

  crown1.visible = true;
  crown2.visible = true;
  crown3.visible = true;
  crown4.visible = true;
  crown5.visible = true;
  crown6.visible = true;

  lev1Life1.visible = true;
  lev1Life2.visible = true;
  lev1Life3.visible = true;
  
 if(keyDown(RIGHT_ARROW) || keyDown("D")){
   penguin1.x = penguin1.x + 10;
   penguin1.mirrorX(-1);
 }

 if(keyDown(LEFT_ARROW) || keyDown("A")){
   penguin1.x = penguin1.x - 10;
   penguin1.mirrorX (1);
 }

 if(keyDown(UP_ARROW)|| keyDown("W")){
   if((penguin1.y > 113 && penguin1.y < 117) ||(penguin1.y > 284 && penguin1.y < 288) || (penguin1.y > 380 && penguin1.y < 468) || (penguin1.y > 560 && penguin1.y < 700)){
     penguin1.velocityY = -13;
   }
 }

  penguin1.velocityY = penguin1.velocityY + 0.8;

  level1PenguinLife();
  sealMovement();
}

function setLevelTwo(){
    
    levelTwoBg = createSprite(windowWidth/2,windowHeight/2,width,height);
    levelTwoBg.addImage(levelTwoImg);
    levelTwoBg.scale = 1.55;
    levelTwoBg.visible = false;

    igloo2 = createSprite(windowWidth-1450,windowHeight-60);
    igloo2.addImage(iglooImg);
    igloo2.visible = false;
    igloo2.mirrorX(-1);
    igloo2.setCollider("rectangle",0,0,150,110);

    iglooOpen2 = createSprite(windowWidth-1380,windowHeight-25,30,40);
    iglooOpen2.visible = false;

    path1 = createSprite(windowWidth-1270,windowHeight-600);
    path1.addImage(land1Img);
    path1.visible = false;
    path1.setCollider("rectangle",0,10,550,40);

    path2 = createSprite(windowWidth-890,windowHeight-400);
    path2.addImage(land3Img);
    path2.visible = false;
    path2.setCollider("rectangle",100,5,470,40);

    path3 = createSprite(windowWidth-270,windowHeight-600);
    path3.addImage(land1Img);
    path3.visible = false;
    path3.mirrorX(-1);
    path3.setCollider("rectangle",0,10,550,40);

    path4= createSprite(windowWidth-1280,windowHeight-400);
    path4.addImage(land1Img);
    path4.visible = false;
    path4.setCollider("rectangle",0,10,550,40);

    path5 = createSprite(windowWidth-290,windowHeight-400);
    path5.addImage(land1Img);
    path5.visible = false;
    path5.mirrorX(-1);
    path5.setCollider("rectangle",0,10,550,40);

    path6 = createSprite(windowWidth-770,windowHeight-200);
    path6.addImage(land1Img);
    path6.visible = false;
    path6.setCollider("rectangle",0,10,550,40);

     path7 = createSprite(windowWidth-300,windowHeight-100);
     path7.addImage(land2Img);
     path7.visible = false;
     path7.setCollider("rectangle",0,0,250,40);

     path8 = createSprite(windowWidth- 1250,windowHeight+20);
     path8.addImage(land2Img);
     path8.visible = false;
     path8.setCollider("rectangle",0,0,250,40);
    
    penguin2 = createSprite(windowWidth-1300,windowHeight-600);
    penguin2.addImage(penguinImg);
    penguin2.scale = 0.1;
    penguin2.mirrorX(-1);
    penguin2.visible = false;

    fish1 = createSprite(windowWidth-1200,windowHeight -450);
    fish1.addImage(fishImg);
    fish1.scale = 0.08;
    fish1.visible = false;

    fish2 = createSprite(windowWidth-1300,windowHeight -450);
    fish2.addImage(fishImg);
    fish2.scale = 0.08;
    fish2.visible = false;

    fish3 = createSprite(windowWidth-1400,windowHeight -450);
    fish3.addImage(fishImg);
    fish3.scale = 0.08;
    fish3.visible = false;

    fish4 = createSprite(windowWidth-1100,windowHeight -450);
    fish4.addImage(fishImg);
    fish4.scale = 0.08;
    fish4.visible = false;

    fish5 = createSprite(windowWidth-500,windowHeight -450);
    fish5.addImage(fishImg);
    fish5.scale = 0.08;
    fish5.visible = false;

    fish6 = createSprite(windowWidth-400,windowHeight -450);
    fish6.addImage(fishImg);
    fish6.scale = 0.08;
    fish6.visible = false;

    fish7 = createSprite(windowWidth-300,windowHeight -450);
    fish7.addImage(fishImg);
    fish7.scale = 0.08;
    fish7.visible = false;

    fish8 = createSprite(windowWidth-200,windowHeight -450);
    fish8.addImage(fishImg);
    fish8.scale = 0.08;
    fish8.visible = false;

    fish9 = createSprite(windowWidth-300,windowHeight -200);
    fish9.addImage(fishImg);
    fish9.scale = 0.08;
    fish9.visible = false;

    fish10 = createSprite(windowWidth-1250,windowHeight - 50);
    fish10.addImage(fishImg);
    fish10.scale = 0.08;
    fish10.visible = false;


    icicleGroup = createGroup();

    snowBall1 = createSprite(windowWidth-1250,windowHeight-450);
    snowBall1.addImage(snowImg);
    snowBall1.scale = 0.6;
    snowBall1.visible = false;

    snowBall2 = createSprite(windowWidth - 250,windowHeight - 450);
    snowBall2.addImage(snowImg);
    snowBall2.scale = 0.6;
    snowBall2.visible = false;

    lev2Life1 = createSprite(windowWidth-850,windowHeight-700,20,20);
    lev2Life1.addImage(lifeImg);
    lev2Life1.scale = 0.1;
    lev2Life1.visible = false;
    lev2Life2 = createSprite(windowWidth-800,windowHeight-700,20,20);
    lev2Life2.addImage(lifeImg);
    lev2Life2.scale = 0.1;
    lev2Life2.visible = false;
    lev2Life3 = createSprite(windowWidth-750,windowHeight-700,20,20);
    lev2Life3.addImage(lifeImg);
    lev2Life3.scale = 0.1;
    lev2Life3.visible = false;
     
    gameOver = createSprite(windowWidth/2,windowHeight/2);
    gameOver.addImage(gameOverImg);
    gameOver.scale = 0.5;
    gameOver.visible = false;

    restart = createSprite(windowWidth - 750,windowHeight-180);
    restart.addImage(restartImg);
    restart.scale = 0.3;
    restart.visible = false;

}
function icicleDisplay(){

  if(frameCount % 15 === 0){

   icicle = createSprite(500,-1,20,20);
   icicle.addImage(icicleImg);
   icicle.scale = 0.9;
   icicle.velocityY = 14;
   icicle.lifetime = 100; 
   icicle.x = Math.round(random(1,windowWidth));
   icicleGroup.add(icicle);
} 
}

function level2PenguinLife(){

  if(icicleGroup.isTouching(penguin2)){
      level2Life = level2Life - 1; 
      loseSound.play();
      penguin2.x =  windowWidth-1300;  
      penguin2.y =  windowHeight-800;
  }

  if(penguin2.y >= windowHeight){
    level2Life = level2Life - 1;
    loseSound.play();
    penguin2.x =  windowWidth-1300;  
    penguin2.y =  windowHeight-800;
  }

  if(penguin2.isTouching(snowBall1)){
    level2Life = level2Life - 1;
    loseSound.play();
    penguin2.x =  windowWidth-1300;  
    penguin2.y =  windowHeight-800;
  }

  if(penguin2.isTouching(snowBall2)){
    level2Life = level2Life - 1;
    loseSound.play();
    penguin2.x =  windowWidth-1300;  
    penguin2.y =  windowHeight-800;
  }
  
  if(level2Life === 2){
    lev2Life3.destroy();
  }

  if(level2Life === 1){
    lev2Life2.destroy();
  }

  if(level2Life === 0){
    lev2Life1.destroy();
    penguin2.destroy();
    gameOver.visible = true;
    restart.visible = true;
    icicle.destroy();
    snow1.destroy();
    snowBall1.destroy();
    snowBall2.destroy();
    if(mousePressedOver(restart)){
      gameState = "levelTwo";
      level2Life = 3;
      level2Score = 0;
      snowBall1Disappear = 0;
      snowBall2Disappear = 0;
      gameOver.destroy();
      restart.destroy();
      setLevelTwo();
    }
   }
}

function level2PenguinScore(){

  fill("black");
  textFont("algerian");
  textSize(50);
  text("Fish : " + level2Score, windowWidth-850,windowHeight - 600 );

  if(penguin2.isTouching(fish1)){
   collectSound.play(); 
   fish1.destroy();
   level2Score = level2Score + 1;
  }

  if(penguin2.isTouching(fish2)){
    collectSound.play(); 
    fish2.destroy();
    level2Score = level2Score + 1;
   }

   if(penguin2.isTouching(fish3)){
    collectSound.play(); 
    fish3.destroy();
    level2Score = level2Score + 1;
   }

   if(penguin2.isTouching(fish4)){
    collectSound.play(); 
    fish4.destroy();
    level2Score = level2Score + 1;
   }

   if(penguin2.isTouching(fish5)){
    collectSound.play();   
    fish5.destroy();
    level2Score = level2Score + 1;
   }

   if(penguin2.isTouching(fish6)){
    collectSound.play();  
    fish6.destroy();
    level2Score = level2Score + 1;
   }

   if(penguin2.isTouching(fish7)){
    collectSound.play();   
    fish7.destroy();
    level2Score = level2Score + 1;
   }

   if(penguin2.isTouching(fish8)){
    collectSound.play();   
    fish8.destroy();
    level2Score = level2Score + 1;
   }

   if(penguin2.isTouching(fish9)){
    collectSound.play();  
    fish9.destroy();
    level2Score = level2Score + 1;
   }

   if(penguin2.isTouching(fish10)){
    collectSound.play(); 
    fish10.destroy();
    level2Score = level2Score + 1;
   }

   
   if(level2Score === 8){    
    path2.destroy();
    level2Score = 9;
    crackSound.play();
     
   }

   if(level2Score === 11){
    if(penguin2.isTouching(iglooOpen2)){
      //add sound
      gameState = "levelThree";
      setLevelThree();
      winSound.play();
    }  
   }

   if(level2Score !== 11){
    if(penguin2.isTouching(iglooOpen2)){
      textSize(50);
      textFont("jokerman");
      fill(255, 212, 0);
      stroke("black");
      strokeWeight(7);
      text("STOMACH  NOT  FULL",windowWidth-1000,windowHeight/2);
    }  
  }
}

function snowBallMovement(){

  if(snowBall2Disappear === 0 ){
    snowBall2.velocityX = 5; 
  }

  if(snowBall2.x >= (windowWidth -50)){
    snowBall2.velocityX = -5;
    snowBall2Disappear = 1;

  }else if(snowBall2.x <= (windowWidth -520)){
      snowBall2.velocityX = 5;
      snowBall2Disappear = 0;
  }
   
  if(snowBall1Disappear === 0 ){
    snowBall1.velocityX = 5; 
  }

  if(snowBall1.x >= (windowWidth -1000)){
    snowBall1.velocityX = -5;
    snowBall1Disappear = 1;

  }else if(snowBall1.x <= (windowWidth -1500)){
      snowBall1.velocityX = 5;
      snowBall1Disappear = 0;
  }

}

function levelTwo(){

  penguin2.bounceOff(edges[0]);
  penguin2.bounceOff(edges[1]);

  if(frameCount % 3 === 0){
    snow1 = createSprite(500,1,20,20);
    snow1.x = Math.round(random(1,windowWidth));
    snow1.addImage(snowImg);
    snow1.scale = 0.07;
    snow1.velocityY = 7;
    snow1.lifetime = 102;}
  
  levelTwoBg.visible = true;
  levelOneBg.destroy();
  bg.destroy();
  playButton.destroy();
  igloo1.destroy();
  penguin1.destroy();
  seal1.destroy();
  seal2.destroy();
  land1.destroy();
  land2.destroy();
  land3.destroy();
  land4.destroy(); 
  land5.destroy();
  land6.destroy();
  crown1.destroy();
  crown2.destroy();
  crown3.destroy();
  crown4.destroy();
  crown5.destroy();
  crown6.destroy();
  lev1Life1.destroy();
  lev1Life2.destroy();
  lev1Life3.destroy();

  igloo2.visible = true;
  penguin2.collide(igloo2);
  iglooOpen2.visible = false;
  penguin2.visible = true;
  path1.visible = true;
  penguin2.collide(path1);
  path2.visible = true;
  penguin2.collide(path2);
  path3.visible = true;
  penguin2.collide(path3);
  path4.visible = true;
  penguin2.collide(path4);
  path5.visible = true;
  penguin2.collide(path5);
  path6.visible = true;
  penguin2.collide(path6);
  path7.visible = true;
  penguin2.collide(path7);
  path8.visible = true;
  penguin2.collide(path8);

  snowBall1.visible = true;
  snowBall1.rotation = snowBall1.rotation + 5;

  snowBall2.visible = true; 
  snowBall2.rotation = snowBall2.rotation -5;

  fish1.visible = true;
  fish2.visible = true;
  fish3.visible = true;
  fish4.visible = true;
  fish5.visible = true;
  fish6.visible = true;
  fish7.visible = true;
  fish8.visible = true;
  fish9.visible = true;
  fish10.visible = true;

  lev2Life1.visible = true;
  lev2Life2.visible = true;
  lev2Life3.visible = true;

  level2PenguinScore();
  
  icicleDisplay();

  level2PenguinLife();

  snowBallMovement(); 

  if(keyDown(RIGHT_ARROW)|| keyDown("D")){
    penguin2.x = penguin2.x + 10;
    penguin2.mirrorX(-1);
  }
 
  if(keyDown(LEFT_ARROW)|| keyDown("A")){
    penguin2.x = penguin2.x - 10;
    penguin2.mirrorX (1);
  }
 
  if(keyDown(UP_ARROW)|| keyDown("W")){
    penguin2.velocityY = -13;
  }
 
   penguin2.velocityY = penguin2.velocityY + 0.8; 
}

function setLevelThree(){

    levelThreeBg = createSprite(windowWidth/2,windowHeight/2,width,height);
    levelThreeBg.addImage(levelThreeImg);
    levelThreeBg.scale = 3.87;
    levelThreeBg.visible = false;
      
     way1 = createSprite(windowWidth/2,windowHeight-10);
     way1.addImage(land1Img);
     way1.visible = false;
     way1.setCollider("rectangle",0,22,550,40);

     igloo3 = createSprite(windowWidth/2,windowHeight-70);
     igloo3.addImage(iglooImg);
     igloo3.visible = false;
     igloo3.setCollider("rectangle",0,0,150,110);

     iglooOpen3 = createSprite(windowWidth-840,windowHeight-30,30,40);
     iglooOpen3.visible = false;

     way2 = createSprite(windowWidth - 450,windowHeight-40);
     way2.addImage(land5Img);
     way2.visible = false;

     way3 = createSprite(windowWidth - 350,windowHeight - 40);
     way3.addImage(land5Img);
     way3.visible = false;

     way4 = createSprite(windowWidth -250,windowHeight - 40);
     way4.addImage(land5Img);
     way4.visible = false;

     way5 = createSprite(windowWidth -150,windowHeight - 40);
     way5.addImage(land5Img);
     way5.visible = false;

     way6 = createSprite(windowWidth -50,windowHeight - 40);
     way6.addImage(land5Img);
     way6.visible = false;

     way7 = createSprite(windowWidth -1500,windowHeight - 40);
     way7.addImage(land5Img);
     way7.visible = false;

     way8 = createSprite(windowWidth -1400,windowHeight - 40);
     way8.addImage(land5Img);
     way8.visible = false;

     way9 = createSprite(windowWidth -1300,windowHeight - 40);
     way9.addImage(land5Img);
     way9.visible = false;

     way10 = createSprite(windowWidth -1200,windowHeight - 40);
     way10.addImage(land5Img);
     way10.visible = false;

     way11 = createSprite(windowWidth -1100,windowHeight - 40);
     way11.addImage(land5Img);
     way11.visible = false;

     way12 = createSprite(windowWidth/2,windowHeight-600);
     way12.addImage(land2Img);
     way12.visible = false;
     way12.setCollider("rectangle",0,5,250,40);

     way13 = createSprite(windowWidth-1400,windowHeight-500);
     way13.addImage(land6Img);
     way13.scale = 0.6;
     way13.visible = false;
     way13.setCollider("rectangle",0,10,100,40);   
     
     way14 = createSprite(windowWidth-1290,windowHeight-500);
     way14.addImage(land6Img);
     way14.visible = false;
     way14.scale = 0.6;
     way14.setCollider("rectangle",0,10,100,40); 

     way15 = createSprite(windowWidth-1180,windowHeight-500);
     way15.addImage(land6Img);
     way15.visible = false;
     way15.scale = 0.6;
     way15.setCollider("rectangle",0,10,100,40); 

     way16 = createSprite(windowWidth-400,windowHeight-500);
     way16.addImage(land6Img);
     way16.scale = 0.6;
     way16.visible = false;
     way16.setCollider("rectangle",0,10,100,40);   
     
     way17 = createSprite(windowWidth-290,windowHeight-500);
     way17.addImage(land6Img);
     way17.visible = false;
     way17.scale = 0.6;
     way17.setCollider("rectangle",0,10,100,40); 

     way18 = createSprite(windowWidth-180,windowHeight-500);
     way18.addImage(land6Img);
     way18.visible = false;
     way18.scale = 0.6;
     way18.setCollider("rectangle",0,10,100,40);
     
     way19 = createSprite(windowWidth-950,windowHeight-470);
     way19.addImage(land6Img);
     way19.visible = false;
     way19.scale = 0.7;
     way19.setCollider("rectangle",0,10,100,40);

     way20 = createSprite(windowWidth/2,windowHeight-400);
     way20.addImage(land6Img);
     way20.visible = false;
     way20.scale = 0.7;
     way20.setCollider("rectangle",0,10,100,40);

     way21 = createSprite(windowWidth-580,windowHeight-470);
     way21.addImage(land6Img);
     way21.visible = false;
     way21.scale = 0.7;
     way21.setCollider("rectangle",0,10,100,40);

     way22 = createSprite(windowWidth/2,windowHeight-250);
     way22.addImage(land1Img);
     way22.visible = false;
     way22.scale = 0.7;
     way22.setCollider("rectangle",0,10,100,40);

     way23 = createSprite(windowWidth-1270,windowHeight-300);
     way23.addImage(land1Img);
     way23.visible = false;
     way23.scale = 0.8;
     way23.setCollider("rectangle",0,10,530,40);

     wall1 = createSprite(windowWidth-500,windowHeight-250);
     wall1.addImage(wall1Img);
     wall1.scale = 0.15;
     wall1.visible = false;

     wall2 = createSprite(windowWidth-430,windowHeight-200);
     wall2.addImage(wall2Img);
     wall2.scale = 0.15;
     wall2.visible = false;

     wall3 = createSprite(windowWidth-363,windowHeight-250);
     wall3.addImage(wall1Img);
     wall3.scale = 0.15;
     wall3.visible = false;

     wall4 = createSprite(windowWidth-295,windowHeight-200);
     wall4.addImage(wall2Img);
     wall4.scale = 0.15;
     wall4.visible = false;

     wall5 = createSprite(windowWidth-226,windowHeight-250);
     wall5.addImage(wall1Img);
     wall5.scale = 0.15;
     wall5.visible = false;

     wall6 = createSprite(windowWidth-157,windowHeight-200);
     wall6.addImage(wall2Img);
     wall6.scale = 0.15;
     wall6.visible = false;

     wall7 = createSprite(windowWidth-88,windowHeight-250);
     wall7.addImage(wall1Img);
     wall7.scale = 0.15;
     wall7.visible = false;

     
     way2Open = createSprite(windowWidth - 450,windowHeight - 50,40,40);
     way2Open.visible = false;

     way3Open = createSprite(windowWidth - 350,windowHeight - 50,40,40);
     way3Open.visible = false;

     way4Open = createSprite(windowWidth - 250,windowHeight - 50,40,40);
     way4Open.visible = false;

     way5Open = createSprite(windowWidth - 150,windowHeight - 50,40,40);
     way5Open.visible = false;

     way6Open = createSprite(windowWidth - 50,windowHeight - 50,40,40);
     way6Open.visible = false;

     way7Open = createSprite(windowWidth - 1100,windowHeight - 50,40,40);
     way7Open.visible = false;

     way8Open = createSprite(windowWidth - 1200,windowHeight - 50,40,40);
     way8Open.visible = false;

     way9Open = createSprite(windowWidth -1300,windowHeight - 50,40,40);
     way9Open.visible = false;

     way10Open = createSprite(windowWidth - 1400,windowHeight - 50,40,40);
     way10Open.visible = false;

     way11Open = createSprite(windowWidth -1500,windowHeight - 50,40,40);
     way11Open.visible = false;

     way14Open = createSprite(windowWidth - 1330,windowHeight-500,50,15);
     way14Open.visible = false;

     way17Open = createSprite(windowWidth - 290,windowHeight-510,50,15);
     way17Open.visible = false;

     way20Open = createSprite(windowWidth -770,windowHeight-410,50,15);
     way20Open.visible = false;

     invisibleWay = createSprite(windowWidth-1290,windowHeight-440,300,5);
     invisibleWay.visible = false;

     penguin3 = createSprite(windowWidth -770,windowHeight-800);
     penguin3.addImage(penguinImg);
     penguin3.scale = 0.1;
     penguin3.visible = false;

     penguin3.x = windowWidth -770;
     penguin3.y = windowHeight-800;

     squid1 = createSprite(windowWidth-1499,windowHeight -100);
     squid1.addImage(squid2Img);
     squid1.scale = 0.07;
     squid1.visible = false;

     squid2 = createSprite(windowWidth - 1399,windowHeight - 100);
     squid2.addImage(squid1Img);
     squid2.scale = 0.07;
     squid2.visible = false;

     squid3 = createSprite(windowWidth-1299,windowHeight -100);
     squid3.addImage(squid2Img);
     squid3.scale = 0.07;
     squid3.visible = false;

     squid4 = createSprite(windowWidth -1199,windowHeight - 100);
     squid4.addImage(squid1Img);
     squid4.scale = 0.07;
     squid4.visible = false;

     squid5 = createSprite(windowWidth - 1099,windowHeight - 100);
     squid5.addImage(squid2Img);
     squid5.scale = 0.07;
     squid5.visible = false;

     squid6 = createSprite(windowWidth - 455,windowHeight - 100);
     squid6.addImage(squid1Img);
     squid6.scale = 0.07;
     squid6.visible = false;

     squid7 = createSprite(windowWidth - 355,windowHeight - 100);
     squid7.addImage(squid2Img);
     squid7.scale = 0.07;
     squid7.visible = false;

     squid8 = createSprite(windowWidth - 255,windowHeight - 100);
     squid8.addImage(squid1Img);
     squid8.scale = 0.07;
     squid8.visible = false;

     squid9 = createSprite(windowWidth - 155,windowHeight - 100);
     squid9.addImage(squid2Img);
     squid9.scale = 0.07;
     squid9.visible = false;

     squid10 = createSprite(windowWidth - 55,windowHeight - 100);
     squid10.addImage(squid1Img);
     squid10.scale = 0.07;
     squid10.visible = false;

     squid11 = createSprite(windowWidth-1285,windowHeight-540);
     squid11.scale = 0.4;
     squid11.addImage(squid3Img);
     squid11.visible = false;

     squid12 = createSprite(windowWidth-400,windowHeight-540);
     squid12.scale = 0.4;
     squid12.addImage(squid3Img);
     squid12.visible = false;

     squid13 = createSprite(windowWidth-290,windowHeight-540);
     squid13.scale = 0.08;
     squid13.addImage(squid1Img);
     squid13.visible = false;

     squid14 = createSprite(windowWidth-180,windowHeight-540);
     squid14.scale = 0.4;
     squid14.addImage(squid3Img);
     squid14.visible = false;

     squid15 = createSprite(windowWidth-1400,windowHeight-540);
     squid15.scale = 0.08;
     squid15.addImage(squid2Img);
     squid15.visible = false;

     squid16 = createSprite(windowWidth-1180,windowHeight-540);
     squid16.scale = 0.08;
     squid16.addImage(squid2Img);
     squid16.visible = false;

     squid17 = createSprite(windowWidth/2,windowHeight-440);
     squid17.scale = 0.08;
     squid17.addImage(squid4Img);
     squid17.visible = false;

     squid18 = createSprite(windowWidth/2,windowHeight-440);
     squid18.scale = 0.08;
     squid18.addImage(squid4Img);
     squid18.visible = false;

     squid19 = createSprite(windowWidth - 430,windowHeight-240);
     squid19.scale = 0.08;
     squid19.addImage(squid5Img);
     squid19.visible = false;

     squid20 = createSprite(windowWidth- 290,windowHeight-240);
     squid20.scale = 0.08;
     squid20.addImage(squid5Img);
     squid20.visible = false;

     squid21 = createSprite(windowWidth - 150,windowHeight-240);
     squid21.scale = 0.08;
     squid21.addImage(squid5Img);
     squid21.visible = false;

     sun = createSprite(windowWidth-200,windowHeight-660);
     sun.addImage(sunImg);
     sun.scale = 0.05;
     sun.visible = false;

     sunRay = createSprite(windowWidth-200,windowHeight-660);
     sunRay.addImage(sunRayImg);
     sunRay.scale = 0.4;
     sunRay.visible = false;

     hotWater1 = createSprite(windowWidth-1290,windowHeight-450);
     hotWater1.addImage(hotWaterImg);
     hotWater1.scale = 1.7;
     hotWater1.visible = false;

     hotWater2 = createSprite(windowWidth-280,windowHeight-450);
     hotWater2.addImage(hotWaterImg);
     hotWater2.scale = 1.7;
     hotWater2.visible = false;

     horn1 = createSprite(windowWidth/2,windowHeight-290);
     horn1.addImage(horn1Img);
     horn1.mirrorY(-1);
     horn1.scale = 0.4;
     horn1.visible = false;

     horn2 = createSprite(windowWidth-600,windowHeight-215);
     horn2.addImage(horn2Img);
     horn2.mirrorX(-1);
     horn2.scale = 0.4;
     horn2.visible = false;

     horn3 = createSprite(windowWidth-920,windowHeight-215);
     horn3.addImage(horn2Img);
     horn3.scale = 0.4;
     horn3.visible = false;

     horn4 = createSprite(windowWidth-730,windowHeight-215);
     horn4.addImage(horn2Img);
     horn4.mirrorX(-1);
     horn4.scale = 0.4;
     horn4.visible = false;

     horn5 = createSprite(windowWidth-770,windowHeight-215);
     horn5.addImage(horn2Img);
     horn5.scale = 0.4;
     horn5.visible = false;

     enemy1 = createSprite(windowWidth-1300,windowHeight/2+30);
     enemy1.addImage(enemy1Img);
     enemy1.mirrorX(-1);
     enemy1.scale = 0.2;
     enemy1.visible = false;

     lev3Life1 = createSprite(windowWidth - 1400,windowHeight-700);
     lev3Life1.addImage(lifeImg);
     lev3Life1.scale = 0.1;
     lev3Life1.visible = false;
     lev3Life2 = createSprite(windowWidth - 1350,windowHeight-700);
     lev3Life2.addImage(lifeImg);
     lev3Life2.scale = 0.1;
     lev3Life2.visible = false;
     lev3Life3 = createSprite(windowWidth - 1300,windowHeight-700);
     lev3Life3.addImage(lifeImg);
     lev3Life3.scale = 0.1;
     lev3Life3.visible = false;

    gameOver = createSprite(windowWidth/2,windowHeight/2);
    gameOver.addImage(gameOverImg);
    gameOver.scale = 0.5;
    gameOver.visible = false;

    restart = createSprite(windowWidth - 750,windowHeight-180);
    restart.addImage(restartImg);
    restart.scale = 0.3;
    restart.visible = false;
     
}

function fall(){

  if(penguin3.isTouching(way2Open)){
    way2.velocityY = 30;
    way2Open.destroy();
  }

  if(penguin3.isTouching(way3Open)){
    way3.velocityY = 30;
    way3Open.destroy();
  }

  if(penguin3.isTouching(way4Open)){
    way4.velocityY = 30;
    way4Open.destroy();
  }

  if(penguin3.isTouching(way5Open)){
    way5.velocityY = 30;
    way5Open.destroy();
  }

  if(penguin3.isTouching(way6Open)){
    way6.velocityY = 30;
    way6Open.destroy();
  }

  if(penguin3.isTouching(way7Open)){
    way11.velocityY = 30;
    way7Open.destroy();
  }

  if(penguin3.isTouching(way8Open)){
    way10.velocityY = 30;
    way8Open.destroy();
  }

  if(penguin3.isTouching(way9Open)){
    way9.velocityY = 30;
    way9Open.destroy();
  }

  if(penguin3.isTouching(way10Open)){
    way8.velocityY = 30;
    way10Open.destroy();
  }

  if(penguin3.isTouching(way11Open)){
    way7.velocityY = 30;
    way11Open.destroy();
  }

  if(penguin3.isTouching(way14Open)){
    way14.velocityY = 30;
    way14Open.destroy();
  }

  if(penguin3.isTouching(way17Open)){
    way17.velocityY = 30;
    way17Open.destroy();
  }

  if(penguin3.isTouching(way20Open)){
    way20.velocityY = 30;
    way20Open.destroy();
  }
}

function level3PenguinLife(){
  
  if(penguin3.isTouching(hotWater1)){
    hotWaterSound.play();
    level3Life = level3Life - 1;
    penguin3.x = windowWidth -770;
    penguin3.y = windowHeight-800;
  }

  if(penguin3.isTouching(hotWater2)){
    hotWaterSound.play();
    level3Life = level3Life - 1;
    penguin3.x = windowWidth -770;
    penguin3.y = windowHeight-800;
  }

  if(penguin3.isTouching(sunRay)){
    level3Life = level3Life - 1;
    penguin3.x = windowWidth -770;
    penguin3.y = windowHeight-800;
  }

  if(penguin3.isTouching(horn1)){
    loseSound.play();
    level3Life = level3Life - 1;
    penguin3.x = windowWidth -770;
    penguin3.y = windowHeight-800;
  }

  if(penguin3.isTouching(horn2)){
    loseSound.play();
    level3Life = level3Life - 1;
    penguin3.x = windowWidth -770;
    penguin3.y = windowHeight-800;
  }

  if(penguin3.isTouching(horn3)){
    loseSound.play();
    level3Life = level3Life - 1;
    penguin3.x = windowWidth -770;
    penguin3.y = windowHeight-800;
  }

  if(penguin3.isTouching(horn4)){
    loseSound.play();
    level3Life = level3Life - 1;
    penguin3.x = windowWidth -770;
    penguin3.y = windowHeight-800;
  }

  if(penguin3.isTouching(horn5)){
    loseSound.play();
    level3Life = level3Life - 1;
    penguin3.x = windowWidth -770;
    penguin3.y = windowHeight-800;
  }

  if(penguin3.isTouching(enemy1)){
    loseSound.play();
    level3Life = level3Life - 1;
    penguin3.x = windowWidth -770;
    penguin3.y = windowHeight-800;
  }

  if(penguin3.y > windowHeight){
    loseSound.play();
    level3Life = level3Life - 1;
    penguin3.x = windowWidth -770;
    penguin3.y = windowHeight-800;
  }

  if(level3Life === 2){
     lev3Life3.destroy();
  }

  if(level3Life === 1){
    lev3Life2.destroy();
 }

 if(level3Life === 0){
  lev3Life1.destroy();
  penguin3.destroy();
  sunRay.destroy();
  enemy1.velocityX = 0;
  gameOver.visible = true;
  restart.visible = true;
  if(mousePressedOver(restart)){
      gameState = "levelThree";
      level3Life = 3;
      level3Score = 0;
      enemy1Disappear = 0;
      gameOver.destroy();
      restart.destroy();
      setLevelThree();
  }
}
}

function level3PenguinScore(){

  fill("black");
  textFont("algerian");
  textSize(30);
  text("Squids : " + level3Score,windowWidth - 400,windowHeight-690);

  if(penguin3.isTouching(squid1)){
    collectSound.play();
    squid1.destroy();
    level3Score = level3Score +1;
    textSize(50);
  }

  if(penguin3.isTouching(squid2)){
    collectSound.play();
    squid2.destroy();
    level3Score = level3Score+1;
    textSize(50);
  }

  if(penguin3.isTouching(squid3)){
    collectSound.play();
    squid3.destroy();
    level3Score = level3Score +1;
    textSize(50);
  }

  if(penguin3.isTouching(squid4)){
    collectSound.play();
    squid4.destroy();
    level3Score = level3Score +1;
    textSize(50);
  }

  if(penguin3.isTouching(squid5)){
    collectSound.play();
    squid5.destroy();
    level3Score = level3Score +1;
    textSize(50);
  }

  if(penguin3.isTouching(squid6)){
    collectSound.play();
    squid6.destroy();
    level3Score = level3Score +1;
    textSize(50);
  }

  if(penguin3.isTouching(squid7)){
    collectSound.play();
    squid7.destroy();
    level3Score = level3Score +1;
    textSize(50);
  }

  if(penguin3.isTouching(squid8)){
    collectSound.play();
    squid8.destroy();
    level3Score = level3Score +1;
    textSize(50);
  }

  if(penguin3.isTouching(squid9)){
    collectSound.play();
    squid9.destroy();
    level3Score = level3Score +1;
    textSize(50);
  }

  if(penguin3.isTouching(squid10)){
    collectSound.play();
    squid10.destroy();
    level3Score = level3Score +1;
    textSize(50);
  }

  if(penguin3.isTouching(squid11)){
    collectSound.play();
    squid11.destroy();
    level3Score = level3Score +1;
    textSize(50);
  }

  if(penguin3.isTouching(squid12)){
    collectSound.play();
    squid12.destroy();
    level3Score = level3Score +1;
    textSize(50);
  }

  if(penguin3.isTouching(squid13)){
    collectSound.play();
    squid13.destroy();
    level3Score = level3Score +1;
    textSize(50);
  }

  if(penguin3.isTouching(squid14)){
    collectSound.play();
    squid14.destroy();
    level3Score = level3Score +1;
    textSize(50);
  }

  if(penguin3.isTouching(squid15)){
    collectSound.play();
    squid15.destroy();
    level3Score = level3Score +1;
    textSize(50);
  }

  if(penguin3.isTouching(squid16)){
    collectSound.play();
    squid16.destroy();
    level3Score = level3Score +1;
    textSize(50);
  }

  if(penguin3.isTouching(squid17)){
    collectSound.play();
    squid17.destroy();
    level3Score = level3Score +1;
    textSize(50);
  }

  if(penguin3.isTouching(squid18)){
    collectSound.play();
    squid18.destroy();
    level3Score = level3Score +1;
    textSize(50);
  }


  if(penguin3.isTouching(squid19)){
    collectSound.play();
    squid19.destroy();
    level3Score = level3Score +1;
    textSize(50);
  }

  if(penguin3.isTouching(squid20)){
    collectSound.play();
    squid20.destroy();
    level3Score = level3Score +1;
    textSize(50);
  }

  if(penguin3.isTouching(squid21)){
    collectSound.play();
    squid21.destroy();
    level3Score = level3Score +1;
    textSize(50);
  }

  if(level3Score === 21){
      
    if(penguin3.isTouching(iglooOpen3)){
      //add sound
     setLevelFour();
     gameState = "levelFour";
      winSound.play();
      
    }
  }

  if(level3Score != 21){
    if(penguin3.isTouching(iglooOpen3)){
      textSize(50); 
      textFont("jokerman");
      fill(255, 212, 0);
      stroke("black");
      strokeWeight(7);
      text("STOMACH  NOT  FULL",windowWidth-1000,windowHeight/2);
     }
  }
}
function levelThree(){

  penguin3.bounceOff(edges[0]);
  penguin3.bounceOff(edges[1]);

  if(frameCount % 200 === 0){
     sunRay.visible = true;
     sunRay.y = windowHeight - 600;
     sunRay.velocityY = 20;
  }

  if(frameCount % 3 === 0){
    snow3 = createSprite(500,1,20,20);
    snow3.x = Math.round(random(1,windowWidth));
    //console.log(snow.x);
    snow3.addImage(snowImg);
    snow3.scale = 0.07;
    snow3.velocityY = 7;
    snow3.lifetime = 102;}

  

  levelTwoBg.destroy();

  levelThreeBg.visible = true;

  igloo3.visible = true;
  penguin3.collide(igloo3); 
  iglooOpen3.visible = false;

  penguin3.visible = true;
  way1.visible = true;
  penguin3.collide(way1);
  way2.visible = true;
  penguin3.collide(way2);
  way3.visible = true;
  penguin3.collide(way3);
  way4.visible = true;
  penguin3.collide(way4);
  way5.visible = true;
  penguin3.collide(way5);
  way6.visible = true;
  penguin3.collide(way6);
  way7.visible = true;
  penguin3.collide(way7);
  way8.visible = true;
  penguin3.collide(way8);
  way9.visible = true;
  penguin3.collide(way9);
  way10.visible = true;
  penguin3.collide(way10);
  way11.visible = true;
  penguin3.collide(way11);
  way12.visible = true;
  penguin3.collide(way12);
  way13.visible = true;
  penguin3.collide(way13);
  way14.visible = true;
  penguin3.collide(way14);
  way15.visible = true;
  penguin3.collide(way15);
  way16.visible = true;
  penguin3.collide(way16);
  way17.visible = true;
  penguin3.collide(way17);
  way18.visible = true;
  penguin3.collide(way18);
  way19.visible = true;
  penguin3.collide(way19);
  way20.visible = true;
  penguin3.collide(way20);
  way21.visible = true;
  penguin3.collide(way21);
  way22.visible = true;
  penguin3.collide(way22);
  way23.visible = true;
  penguin3.collide(way23);

  wall1.visible = true;
  penguin3.collide(wall1);
  wall2.visible = true;
  penguin3.collide(wall2);
  wall3.visible = true;
  penguin3.collide(wall3);
  wall4.visible = true;
  penguin3.collide(wall4);
  wall5.visible = true;
  penguin3.collide(wall5);
  wall6.visible = true;
  penguin3.collide(wall6);
  wall7.visible = true;
  penguin3.collide(wall7);

  invisibleWay.visible = false;
  penguin3.collide(invisibleWay);

  way2Open.visible = false;
  way3Open.visible = false;
  way4Open.visible = false;
  way5Open.visible = false;
  way6Open.visible = false;
  way7Open.visible = false;
  way8Open.visible = false;
  way9Open.visible = false;
  way10Open.visible = false;
  way11Open.visible = false;

  squid1.visible = true;
  squid2.visible = true;
  squid3.visible = true;
  squid4.visible = true;
  squid5.visible = true;
  squid6.visible = true;
  squid7.visible = true;
  squid8.visible = true;
  squid9.visible = true;
  squid10.visible = true;
  squid11.visible = true;
  squid12.visible = true;
  squid13.visible = true;
  squid14.visible = true;
  squid15.visible = true;
  squid16.visible = true;
  squid17.visible = true;
  squid18.visible = true;
  squid19.visible = true;
  squid20.visible = true;
  squid21.visible = true;
  

  lev3Life1.visible = true;
  lev3Life2.visible = true;
  lev3Life3.visible = true;

  sun.visible = true;
  hotWater1.visible = true;
  hotWater2.visible = true;
  horn1.visible = true;
  horn2.visible = true;
  horn3.visible = true;
  horn4.visible = true;
  horn5.visible = true;

  enemy1.visible = true;

  fall();
  level3PenguinScore();
  level3PenguinLife();

  if(keyDown(RIGHT_ARROW)|| keyDown("D")){
    penguin3.x = penguin3.x + 10;
    penguin3.mirrorX(-1);
  }
 
  if(keyDown(LEFT_ARROW)|| keyDown("A")){
    penguin3.x = penguin3.x - 10;
    penguin3.mirrorX (1);
  }

  if(keyDown(UP_ARROW)|| keyDown("W")){
    penguin3.velocityY = -13;
  }

  penguin3.velocityY = penguin3.velocityY + 0.8;

  if(enemy1Disappear === 0){
     enemy1.velocityX = 5.5;
  }
  if(enemy1.x >= (windowWidth-1080)){
      enemy1.velocityX = -5.5;
      enemy1Disappear = 1;
      enemy1.mirrorX(1);
  }else if(enemy1.x <= (windowWidth-1460)){
      enemy1.velocityX = 5.5;
      enemy1Disappear = 0;
      enemy1.mirrorX(-1);
  }
 
   
}

function setLevelFour(){

     levelFourBg = createSprite(windowWidth/2,windowHeight/2,width,height);
     levelFourBg.addImage(levelFourImg);
     levelFourBg.scale = 0.6;
     levelFourBg.visible = false;

     track1 = createSprite(windowWidth-1420,windowHeight-560);
     track1.addImage(land2Img);
     track1.scale = 1;
     track1.setCollider("rectangle",0,0,250,40);
     track1.visible = false;

     track2 = createSprite(windowWidth-135,windowHeight-560);
     track2.addImage(land2Img);
     track2.scale = 1;
     track2.setCollider("rectangle",0,0,250,40);
     track2.visible = false;

     track3 = createSprite(windowWidth-1420,windowHeight-140);
     track3.addImage(land2Img);
     track3.scale = 1;
     track3.setCollider("rectangle",0,15,250,40);
     track3.visible = false;

     igloo4 = createSprite(windowWidth-1470,windowHeight-200);
     igloo4.addImage(iglooImg);
     igloo4.mirrorX(-1);
     igloo4.scale = 0.8;
     igloo4.visible = false;
     igloo4.setCollider("rectangle",0,0,150,110);

     iglooOpen4 = createSprite(windowWidth-1410,windowHeight-170,30,40);
     iglooOpen4.visible = false;

     track4 = createSprite(windowWidth-135,windowHeight-140);
     track4.addImage(land2Img);
     track4.scale = 1;
     track4.setCollider("rectangle",0,0,250,40);
     track4.visible = false;

     track5 = createSprite(windowWidth-760,windowHeight-600);
     track5.addImage(land2Img);
     track5.scale = 1;
     track5.setCollider("rectangle",0,0,250,40);
     track5.visible = false;

     track6 = createSprite(windowWidth-950,windowHeight-470);
     track6.addImage(land2Img);
     track6.scale = 1;
     track6.setCollider("rectangle",0,0,250,40);
     track6.visible = false;

     track7 = createSprite(windowWidth-550,windowHeight-470);
     track7.addImage(land2Img);
     track7.scale = 1;
     track7.setCollider("rectangle",0,0,250,40);
     track7.visible = false;

     track8 = createSprite(windowWidth-950,windowHeight-330);
     track8.addImage(land2Img);
     track8.scale = 1;
     track8.setCollider("rectangle",0,0,250,40);
     track8.visible = false;

     track9 = createSprite(windowWidth-550,windowHeight-330);
     track9.addImage(land2Img);
     track9.scale = 1;
     track9.setCollider("rectangle",0,0,250,40);
     track9.visible = false;

     track10 = createSprite(windowWidth-1100,windowHeight-190);
     track10.addImage(land2Img);
     track10.scale = 1;
     track10.setCollider("rectangle",0,0,250,40);
     track10.visible = false;

     track11 = createSprite(windowWidth-780,windowHeight-190);
     track11.addImage(land2Img);
     track11.scale = 1;
     track11.setCollider("rectangle",0,0,250,40);
     track11.visible = false;

     track12 = createSprite(windowWidth-460,windowHeight-190);
     track12.addImage(land2Img);
     track12.scale = 1;
     track12.setCollider("rectangle",0,0,250,40);
     track12.visible = false;
     
     track13 = createSprite(windowWidth-780,windowHeight-50);
     track13.addImage(land1Img);
     track13.scale = 1;
     track13.setCollider("rectangle",0,10,550,40);
     track13.visible = false;

     penguin4 = createSprite(windowWidth-1400,windowHeight-800);
     penguin4.addImage(penguinImg);
     penguin4.scale = 0.1;
     penguin4.visible = false;

     cone1 = createSprite(windowWidth-750,windowHeight-670);
     cone1.addImage(cone7Img);
     cone1.scale = 0.2;
     cone1.visible = false;

     cone2 = createSprite(windowWidth-600,windowHeight-520);
     cone2.addImage(cone2Img);
     cone2.scale = 0.34;
     cone2.visible = false;

     cone3 = createSprite(windowWidth-900,windowHeight-520);
     cone3.addImage(cone2Img);
     cone3.scale = 0.34 ;
     cone3.visible = false;

     cone4 = createSprite(windowWidth-780,windowHeight-250);
     cone4.addImage(cone8Img);
     cone4.scale = 0.22;
     cone4.visible = false;

     cone5 = createSprite(windowWidth-1080,windowHeight-250);
     cone5.addImage(cone6Img);
     cone5.scale = 0.3;
     cone5.visible = false;

     cone6 = createSprite(windowWidth-450,windowHeight-250);
     cone6.addImage(cone6Img);
     cone6.scale = 0.3;
     cone6.visible = false;

     cone7 = createSprite(windowWidth-115,windowHeight-200);
     cone7.addImage(cone4Img);
     cone7.scale = 0.4;
     cone7.visible = false;

     cone8 = createSprite(windowWidth-115,windowHeight-620);
     cone8.addImage(cone4Img);
     cone8.scale = 0.4;
     cone8.visible = false;

     cone9 = createSprite(windowWidth-540,windowHeight-370);
     cone9.addImage(cone2Img);
     cone9.scale = 0.35;
     cone9.visible = false;

     cone10 = createSprite(windowWidth-940,windowHeight-370);
     cone10.addImage(cone2Img);
     cone10.scale = 0.35;
     cone10.visible = false;

     cone11 = createSprite(windowWidth-540,windowHeight-100);
     cone11.addImage(cone8Img);
     cone11.scale = 0.23;
     cone11.visible = false;

     cone12 = createSprite(windowWidth-980,windowHeight-100);
     cone12.addImage(cone8Img);
     cone12.scale = 0.23;
     cone12.visible = false;

     crack1 = createSprite(windowWidth-940,windowHeight-390);
     crack1.addImage(crackImg);
     crack1.scale = 0.25;
     crack1.visible = false;

     crack2 = createSprite(windowWidth-540,windowHeight-390);
     crack2.addImage(crackImg);
     crack2.scale = 0.25;
     crack2.visible = false;

     storm1 = createSprite(windowWidth-1000,windowHeight-540);
     storm1.addAnimation("heavy",stormImg);
     storm1.scale = 0.3;
     storm1.visible = false;

     storm2 = createSprite(windowWidth-470,windowHeight-540);
     storm2.addAnimation("heavy",stormImg);
     storm2.scale = 0.3;
     storm2.visible = false;

     tip = createSprite(windowWidth/2,windowHeight-100);
     tip.addImage(horn1Img);
     tip.mirrorY(-1);
     tip.scale = 0.4;
     tip.visible = false;

     lev4Life1 = createSprite(windowWidth-1300,windowHeight-700,20,20);
     lev4Life1.addImage(lifeImg);
     lev4Life1.scale = 0.1;
     lev4Life1.visible = false;
     lev4Life2 = createSprite(windowWidth-1250,windowHeight-700,20,20);
     lev4Life2.addImage(lifeImg);
     lev4Life2.scale = 0.1;
     lev4Life2.visible = false;
     lev4Life3 = createSprite(windowWidth-1200,windowHeight-700,20,20);
     lev4Life3.addImage(lifeImg);
     lev4Life3.scale = 0.1;
     lev4Life3.visible = false;
     lev4Life4 = createSprite(windowWidth-1150,windowHeight-700,20,20);
     lev4Life4.addImage(lifeImg);
     lev4Life4.scale = 0.1;
     lev4Life4.visible = false;
     lev4Life5 = createSprite(windowWidth-1100,windowHeight-700,20,20);
     lev4Life5.addImage(lifeImg);
     lev4Life5.scale = 0.1;
     lev4Life5.visible = false;

    gameOver = createSprite(windowWidth/2,windowHeight/2);
    gameOver.addImage(gameOverImg);
    gameOver.scale = 0.5;
    gameOver.visible = false;

    restart = createSprite(windowWidth - 750,windowHeight-180);
    restart.addImage(restartImg);
    restart.scale = 0.3;
    restart.visible = false;
}

function level4PenguinLife(){
  
  if(penguin4.isTouching(storm1)){
    stormSound.play();
    level4Life = level4Life - 1;
    penguin4.x = windowWidth -1400;
    penguin4.y = windowHeight-800;
  }

  if(penguin4.isTouching(storm2)){
    stormSound.play();
    level4Life = level4Life - 1;
    penguin4.x = windowWidth -1400;
    penguin4.y = windowHeight-800;
  }

  if(penguin4.isTouching(crack1)){
    loseSound.play();
    level4Life = level4Life - 1;
    penguin4.x = windowWidth -1400;
    penguin4.y = windowHeight-800;
  }

  if(penguin4.isTouching(crack2)){
    loseSound.play();
    level4Life = level4Life - 1;
    penguin4.x = windowWidth -1400;
    penguin4.y = windowHeight-800;
  }

  if(penguin4.isTouching(tip)){
    loseSound.play();
    level4Life = level4Life - 1;
    penguin4.x = windowWidth -1400;
    penguin4.y = windowHeight-800;
  }

  if(penguin4.y > windowHeight){
    loseSound.play();
    level4Life = level4Life - 1;
    penguin4.x = windowWidth -1400;
    penguin4.y = windowHeight-800;
  }

  if(level4Life === 4){
    lev4Life5.destroy();
 }

 if(level4Life === 3){
  lev4Life4.destroy();
}

  if(level4Life === 2){
    lev4Life3.destroy();
 }

 if(level4Life === 1){
   lev4Life2.destroy();
}

if(level4Life === 0){
 lev4Life1.destroy();
 penguin4.destroy();
 snow4.destroy();
 storm1.destroy();
 storm2.destroy();
 crack1.velocityX = 0;
 crack2.velocityX = 0; 
 gameOver.visible = true;
 restart.visible = true;
 if(mousePressedOver(restart)){
     gameState = "levelFour";
     level4Life = 5;
     level4Score = 0;
     storm1Disappear = 0;
     storm2Disappear = 0;
     crack1Disappear = 0;
     crack2Disappear = 0;
     gameOver.destroy();
     restart.destroy();
     setLevelFour();
 }

}}

function level4PenguinScore(){
  fill("black");
  textFont("algerian");
  textSize(30);
  text("pearls : " + level4Score,windowWidth - 400,windowHeight-690);

  if(penguin4.isTouching(cone1)){
    collectSound.play();
    cone1.destroy();
    level4Score = level4Score +5;
    textSize(50);
  }

  if(penguin4.isTouching(cone2)){
    collectSound.play();
    cone2.destroy();
    level4Score = level4Score +1;
    textSize(50);
  }

  if(penguin4.isTouching(cone3)){
    collectSound.play();
    cone3.destroy();
    level4Score = level4Score +1;
    textSize(50);
  }

  if(penguin4.isTouching(cone4)){
    collectSound.play();
    cone4.destroy();
    level4Score = level4Score +1;
    textSize(50);
  }

  if(penguin4.isTouching(cone5)){
    collectSound.play();
    cone5.destroy();
    level4Score = level4Score +1;
    textSize(50);
  }

  if(penguin4.isTouching(cone6)){
    collectSound.play();
    cone6.destroy();
    level4Score = level4Score +1;
    textSize(50);
  }

  if(penguin4.isTouching(cone7)){
    collectSound.play();
    cone7.destroy();
    level4Score = level4Score +1;
    textSize(50);
  }

  if(penguin4.isTouching(cone8)){
    collectSound.play();
    cone8.destroy();
    level4Score = level4Score +1;
    textSize(50);
  }

  if(penguin4.isTouching(cone9)){
    collectSound.play();
    cone9.destroy();
    level4Score = level4Score +1;
    textSize(50);
  }


  if(penguin4.isTouching(cone10)){
    collectSound.play();
    cone10.destroy();
    level4Score = level4Score +1;
    textSize(50);
  }


  if(penguin4.isTouching(cone11)){
    collectSound.play();
    cone11.destroy();
    level4Score = level4Score +1;
    textSize(50);
  }


  if(penguin4.isTouching(cone12)){
    collectSound.play();
    cone12.destroy();
    level4Score = level4Score +1;
    textSize(50);
  }


  
  if(level4Score === 16){
      
    if(penguin4.isTouching(iglooOpen4)){
      //add sound
     setEnd();
     gameState = "end";
      winSound.play();
      
    }
  }

  if(level4Score != 16){
    if(penguin4.isTouching(iglooOpen4)){
      textSize(50); 
      textFont("jokerman");
      fill(255, 212, 0);
      stroke("black");
      strokeWeight(7);
      text("FIND  ALL  THE  PEARLS",windowWidth-1000,windowHeight/2);
     }
  }
}

function crackMovement(){
  
  if(crack1Disappear === 0 ){
    crack1.velocityX = -25; 
  }

  if(crack1.x < (windowWidth -1500)){
    crack1.velocityX = 25;
    crack1Disappear = 1;

  }else if(crack1.x > (windowWidth -30)){
      crack1.velocityX = -25;
      crack1Disappear = 0;
  }

  if(crack2Disappear === 0 ){
    crack2.velocityX = 25; 
  }

  if(crack2.x > (windowWidth -30)){
    crack2.velocityX = -25;
    crack2Disappear = 1;

  }else if(crack2.x < (windowWidth -1500)){
      crack2.velocityX = 25;
      crack2Disappear = 0;
  }

}

function stormMovement(){

  if(storm1Disappear === 0 ){
    storm1.velocityX = -15; 
  }

  if(storm1.x < (windowWidth -1100)){
    storm1.velocityX = 15;
    storm1Disappear = 1;

  }else if(storm1.x > (windowWidth -750)){
      storm1.velocityX = -15;
      storm1Disappear = 0;
  }

  if(storm2Disappear === 0 ){
    storm2.velocityX = 15; 
  }

  if(storm2.x > (windowWidth -350)){
    storm2.velocityX = -15;
    storm2Disappear = 1;

  }else if(storm2.x < (windowWidth -700)){
      storm2.velocityX = 15;
      storm2Disappear = 0;
  }
}

function levelFour(){

  penguin4.bounceOff(edges[0]);
  penguin4.bounceOff(edges[1]);

  if(frameCount % 3 === 0){
    snow4 = createSprite(500,1,20,20);
    snow4.x = Math.round(random(1,windowWidth));
    snow4.addImage(snowImg);
    snow4.scale = 0.07;
    snow4.velocityY = 7;
    snow4.lifetime = 102;
  }

  levelFourBg.visible = true;
  penguin4.visible = true;
  levelThreeBg.destroy();

  levelTwoBg.destroy();
  penguin2.destroy();
  snowBall1.destroy();
  snowBall2.destroy();
  igloo2.destroy();
  iglooOpen2.destroy();
  path1.destroy();
  path2.destroy();
  path3.destroy();
  path4.destroy();
  path5.destroy();
  path6.destroy();
  fish1.destroy();
  fish2.destroy();
  fish3.destroy();
  fish4.destroy();
  fish5.destroy();
  fish6.destroy();
  fish7.destroy();
  fish8.destroy();
  fish9.destroy();
  fish10.destroy();
  lev2Life1.destroy();
  lev2Life2.destroy();
  lev2Life3.destroy();

  igloo3.destroy(); 
  iglooOpen3.destroy();

  penguin3.destroy();
  way1.destroy();
  way2.destroy();
  way3.destroy();
  way4.destroy();
  way5.destroy();
  way6.destroy();
  way7.destroy();
  way8.destroy();
  way9.destroy();
  way10.destroy();
  way11.destroy();
  way12.destroy();
  way13.destroy();
  way14.destroy();
  way15.destroy();
  way16.destroy();
  way17.destroy();
  way18.destroy();
  way19.destroy();
  way20.destroy();
  way21.destroy();
  way22.destroy();
  way23.destroy();

  wall1.destroy();
  wall2.destroy();
  wall3.destroy();
  wall4.destroy();
  wall5.destroy();
  wall6.destroy();
  wall7.destroy();

  invisibleWay.destroy();

  way2Open.destroy();
  way3Open.destroy();
  way4Open.destroy();
  way5Open.destroy();
  way6Open.destroy();
  way7Open.destroy();
  way8Open.destroy();
  way9Open.destroy();
  way10Open.destroy();
  way11Open.destroy();

  squid1.destroy();
  squid2.destroy();
  squid3.destroy();
  squid4.destroy();
  squid5.destroy();
  squid6.destroy();
  squid7.destroy();
  squid8.destroy();
  squid9.destroy();
  squid10.destroy();
  squid11.destroy();
  squid12.destroy();
  squid13.destroy();
  squid14.destroy();
  squid15.destroy();
  squid16.destroy();
  squid17.destroy();
  squid18.destroy();
  squid19.destroy();
  squid20.destroy();
  squid21.destroy();

  lev3Life1.destroy();
  lev3Life2.destroy();
  lev3Life3.destroy();

  sun.destroy();
  hotWater1.destroy();
  hotWater2.destroy();
  horn1.destroy();
  horn2.destroy();
  horn3.destroy();
  horn4.destroy();
  horn5.destroy();

  enemy1.destroy();
  igloo4.visible = true;
  penguin4.collide(igloo4);
  iglooOpen4.visible = false;

  track1.visible = true;
  penguin4.collide(track1);
  track2.visible = true;
  penguin4.collide(track2);
  track3.visible = true;
  penguin4.collide(track3);
  track4.visible = true;
  penguin4.collide(track4);
  track5.visible = true;
  penguin4.collide(track5);
  track6.visible = true;
  penguin4.collide(track6);
  track7.visible = true;
  penguin4.collide(track7);
  track8.visible = true;
  penguin4.collide(track8);
  track9.visible = true;
  penguin4.collide(track9);
  track10.visible = true;
  penguin4.collide(track10);
  track11.visible = true;
  penguin4.collide(track11);
  track12.visible = true;
  penguin4.collide(track12);
  track13.visible = true;
  penguin4.collide(track13);

  cone1.visible = true;
  cone2.visible = true;
  cone3.visible = true;
  cone4.visible = true;
  cone5.visible = true;
  cone6.visible = true;
  cone7.visible = true;
  cone8.visible = true;
  cone9.visible = true;
  cone10.visible = true;
  cone11.visible = true;
  cone12.visible = true;

  crack1.visible = true;
  crack2.visible = true;

  storm1.visible = true;
  storm2.visible = true;
  tip.visible = true;

  lev4Life1.visible = true;
  lev4Life2.visible = true;
  lev4Life3.visible = true;
  lev4Life4.visible = true;
  lev4Life5.visible = true;

  crackMovement();
  stormMovement();
  level4PenguinLife();
  level4PenguinScore();

  if(keyDown(RIGHT_ARROW)|| keyDown("D")){
    penguin4.x = penguin4.x + 10;
    penguin4.mirrorX(-1);
  }
 
  if(keyDown(LEFT_ARROW)|| keyDown("A")){
    penguin4.x = penguin4.x - 10;
    penguin4.mirrorX (1);
  }

  if(keyDown(UP_ARROW)|| keyDown("W")){
    penguin4.velocityY = -13;
  }

  penguin4.velocityY = penguin4.velocityY + 0.8;

}

function setEnd(){
  endBg = createSprite(windowWidth/2,windowHeight/2);
  endBg.addImage(endImg);
  endBg.scale = 0.8;
  endBg.visible = false;
}

function end(){

  endBg.visible = true;


  levelFourBg.destroy();
  penguin4.destroy();
  igloo4.destroy();
  iglooOpen4.destroy();
  track1.destroy();
  track2.destroy();
  track3.destroy();
  track4.destroy();
  track5.destroy();
  track6.destroy();
  track7.destroy();
  track8.destroy();
  track9.destroy();
  track10.destroy();
  track11.destroy();
  track12.destroy();
  track13.destroy();
  cone1.destroy();
  cone2.destroy();
  cone3.destroy();
  cone4.destroy();
  cone5.destroy();
  cone6.destroy();
  cone7.destroy();
  cone8.destroy();
  cone9.destroy();
  cone10.destroy();
  cone11.destroy();
  cone12.destroy();
  crack1.destroy();
  crack2.destroy();
  storm1.destroy();
  storm2.destroy();
  tip.destroy();
  lev4Life1.destroy();
  lev4Life2.destroy();
  lev4Life3.destroy();
  bg.destroy();
  playButton.destroy();
  settingsButton.destroy();

  


}
