var player;
var playerImageleft;
var playerImageright;
var enemy;
var enemy2;
var enemy3;
var enemyImage;
var enemy2Image;
var enemy3Image;
var isGameOver;
var backgroundImage;
var score;
function preload(){
  playerImageleft = loadImage("torbjorn2.png");
  playerImageright = loadImage("torbjorn3.png");
  enemyImage = loadImage("bastion.png");
  enemy2Image = loadImage("zenyatta.png");
  enemy3Image = loadImage("orisa.png");
  backgroundImage = loadImage("https://i.kinja-img.com/gawker-media/image/upload/t_original/dtftgbyvrmcxqwrnid76.jpg");
}
function setup() {
  createCanvas(1000,500);
  player=createSprite(250, 470, 50, 50);
  player.addImage(playerImageleft);
  enemy=createSprite(width/2, 0, 10, 30);
  enemy.addImage(enemyImage);
  enemy2=createSprite(width/3, 0, 10, 30);
  enemy2.addImage(enemy2Image);
  enemy3=createSprite(width/1.5, 0, 10, 30);
  enemy3.addImage(enemy3Image);
  isGameOver=false;
  score = 0;
}
function draw() {
  background(backgroundImage);
  drawSprites();
  if (keyDown(RIGHT_ARROW)&&player.position.x<width-25){
  player.position.x = player.position.x+(2+score/100);
  player.addImage(playerImageright);
  }
  if (keyDown(LEFT_ARROW)&&player.position.x>25){
    player.position.x = player.position.x-(2+score/100);
    player.addImage(playerImageleft);
  }
 enemy.position.y = enemy.position.y + (5+score/100);
 enemy2.position.y = enemy2.position.y +(6+score/100);
 enemy3.position.y = enemy3.position.y + (4+score/100);
 if (enemy.position.y > height) {
   enemy.position.y = 0;
   enemy.position.x = random(5, width-5);
   score = (score+1);
 }
   if (enemy2.position.y > height) {
   enemy2.position.y = 0;
   enemy2.position.x = random(5, width-5);
   score = (score+1);
 }
 if (enemy3.position.y > height) {
   enemy3.position.y = 0;
   enemy3.position.x = random(5, width-5);
   score = (score+1);
 }
  if (isGameOver){
    gameOver();
  }else{
    if (enemy.overlap(player))
    {
    isGameOver= true;
    }
    if (enemy2.overlap(player))
    {
    isGameOver= true;
    }
    if (enemy3.overlap(player))
    {
    isGameOver= true;
    }
  if(score>-1){
    fill("black");
    text("robots dodged: "+ score, width-150, 25);
  }
  /*if (score>10){
  enemy.position.y = enemy.position.y + 5.01;
  enemy2.position.y = enemy2.position.y +6.01;
  enemy3.position.y = enemy3.position.y + 4.01;
   if (keyDown(RIGHT_ARROW)&&player.position.x<width-25){
  player.position.x = player.position.x+2.2;}
  if (keyDown(LEFT_ARROW)&&player.position.x>25){
    player.position.x = player.position.x-2.2;
  }
  }
  if (score>20){
  enemy.position.y = enemy.position.y + 5.025;
  enemy2.position.y = enemy2.position.y +6.025;
  enemy3.position.y = enemy3.position.y + 4.025;
   if (keyDown(RIGHT_ARROW)&&player.position.x<width-25){
  player.position.x = player.position.x+2.3;}
  if (keyDown(LEFT_ARROW)&&player.position.x>25){
    player.position.x = player.position.x-2.3;
  }
  }
  if (score>30){
  enemy.position.y = enemy.position.y + 5.05;
  enemy2.position.y = enemy2.position.y +6.05;
  enemy3.position.y = enemy3.position.y + 4.05;
   if (keyDown(RIGHT_ARROW)&&player.position.x<width-25){
  player.position.x = player.position.x+2.5;}
  if (keyDown(LEFT_ARROW)&&player.position.x>25){
    player.position.x = player.position.x-2.5;
  }
  }
  if (score>40){
  enemy.position.y = enemy.position.y + 5.075;
  enemy2.position.y = enemy2.position.y +6.075;
  enemy3.position.y = enemy3.position.y + 4.075;
   if (keyDown(RIGHT_ARROW)&&player.position.x<width-25){
  player.position.x = player.position.x+2.8;}
  if (keyDown(LEFT_ARROW)&&player.position.x>25){
    player.position.x = player.position.x-2.8;
  }
  }
  if (score>50){
  enemy.position.y = enemy.position.y + 5.1;
  enemy2.position.y = enemy2.position.y +6.1;
  enemy3.position.y = enemy3.position.y + 4.1;
   if (keyDown(RIGHT_ARROW)&&player.position.x<width-25){
  player.position.x = player.position.x+3;}
  if (keyDown(LEFT_ARROW)&&player.position.x>25){
    player.position.x = player.position.x-3;
  }
  }*/
  
  
  }
function gameOver() {
  background(0);
  textAlign(CENTER);
  enemy.position.y = 0;
  enemy2.position.y=0;
  enemy3.position.y=0;
  fill("white");
  text("you got torbjorn killed", width/2, height/3);
  text("robots avoided by the tiny man: "+score, width/2, height/2);
  text("click to restart, dingus", width/2, 3*height/4);
  
}
}
function mouseClicked(){
  if(isGameOver){
    isGameOver = false;
    player.position.x = width/2;
    player.position.y = height-31;
    enemy.position.x = width/2;
    enemy.position.y = 0;
    enemy2.position.x = width/3;
    enemy2.position.y = 0;
    enemy3.position.x = width/3;
    enemy3.position.y = 0;
    score=0;
  }
  // if(enemy.overlap(player)){
  //  gameOver();
  //}
  //if (keyDown(UP_ARROW)&&player.position.y<(height-25)){
  //  player.position.y = player.position.y-2;
  //}
  //if(keyDown(DOWN_ARROW)&&player.position.y<500){
  //  player.position.y = player.position.y+2;
  //}
  
}