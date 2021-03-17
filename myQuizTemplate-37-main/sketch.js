var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allContestants;

var database;

var quiz, contestant, question;


function preload(){
 
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}
function draw(){
  background("pink")
  if(playerCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
  text(mouseX+" "+mouseY,mouseX,mouseY)

}