var canvas,backgroundImage;
var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var databade;
var question,contestant,quiz;


function setup(){
  canvas = createCanvas(850,400);
  
  
  database = firebase.database();
  quiz = new Quiz;
  quiz.getState()
  quiz.start()
  question = new Question;
}


function draw(){
  background("lightBlue");
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
  question.display();
}
