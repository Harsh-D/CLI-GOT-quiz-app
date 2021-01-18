// Required npm dependencies : readline-sync and chalk

const chalk = require("chalk");
var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("What is your name ? ");

console.log(chalk `{green.bold ${userName}},Welcome to {black.bgWhite.bold Game Of Thrones Quiz} !`);
beginGame();

//function : play
function play(question, options, answer) {
  console.log(`${question}`);
  for (let i = 0; i < options.length; i++) {
    console.log(`${options[i]}`);
  }
  let userAnswer = readlineSync.question("");
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.greenBright("Correct"));
    score += 1;
  } else {
    console.log(chalk.redBright("Incorrect"));
    console.log("The correct answer is : " + answer) + "\n";
  }
  console.log("Current Score: " + score);
  console.log("_______________\n");
}

function beginGame() {
  // questions object  
  let questions = [
    {
      question: "Who was responsible for the creation of the Night King?",
      options: ["a. The Lord of Light", "b. The Children of the Forest", "c. The First Men"],
      answer: "b",
    },
    {
      question: "Dany’s dragons are (or were) called Drogon, Viserion and ____?",
      options: ["a. Balerion", "b. Dougal", "c. Rhaegal"],
      answer: "c",
    },
    {
      question: "What is the name of Arya’s sword?",
      options: ["a. Ice", "b. Fang", "c. Needle"],
      answer: "c",
    },
  ];

  let highScores = [
    {
      name: "Sansa",
      score: 2,
    },
    {
      name: "Uncle Benjen",
      score: 1,
    },
  ];

  for (let i = 0; i < questions.length; i++) 
  {
    let continueKey = readlineSync.question(
      " Press enter key to continue or q to stop.\n"
    );
    if (continueKey.toLowerCase() === "q") {
      break;
    }
    play(questions[i].question, questions[i].options, questions[i].answer);
  }

  console.log(`\nYour Final Score : ${score}\n`);

  for (let i = 0; i < highScores.length; i++) 
  {
    if (score > highScores[i].score) 
    {
      console.log(chalk `You beat {yellowBright ${highScores[i].name}'s} score !`);
    } 
    else if (score === highScores[i].score) 
    {
      console.log(chalk `You matched {yellowBright ${highScores[i].name}'s} score !`);
    }
  }
}