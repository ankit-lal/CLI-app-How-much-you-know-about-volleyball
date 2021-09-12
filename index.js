var readlineSync = require("readline-sync");

var score = 0;

// data of high score
var highScores = [
  {
    name: "Aniket",
    score: 10,
  },

  {
    name: "Sonu",
    score: 8,
  },

]

// array of objects
var questions = [{
  question: "How many people on each team are in the court? ",
  answer: "6"
}, {
  question: "How is the serving team chosen? ",
  answer: "toss"
},

{
  question: "If you score a point doing a spike, what is it called? ",
  answer: "kill"
},

{
  question: "What is the number of times a team can hit a ball without passing it over the net? ",
  answer: "3"
},

{
  question: "What is the player who specializes in defense called? ",
  answer: "libero"
},

{
  question: "How many sets are in a volleyball game? ",
  answer: "5"

},  

{
  question: "In which way do the teams rotate? ",
  answer: "clockwise"
},

{
  question: "How many positions are there on each side of the court? ",
  answer: "6"
},

{
  question: "For how many seconds does a timeout last? ",
  answer: "30"
},

{
  question: "Which player position serves? ",
  answer: "right back"
}];

function welcome() {
 var userName = readlineSync.question("What's your name player?? ");

  console.log("Welcome "+ userName + " to How much you know about the sport VOLLEYBALL?");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("Smashed!! you are correct :) ");
    score = score + 1;
    
  } else {
    console.log(" ah!! you missed the dig....wrong ;) ");
   
  }

  console.log("current score: ", score);
  console.log("--------------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("Final Score after end of the last set ;) ", score);

  console.log("CHECKOUT THE HIGHSCORE");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();
