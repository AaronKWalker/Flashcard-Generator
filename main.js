var ClozeCard = require("./clozeCard.js");

var inquirer = require("inquirer");

var historyDeck = [
  {
    compText:"",
    missingBit:""
  },
  {
    compText:"",
    missingBit:""
  },
  {
    compText:"",
    missingBit:""
  },
  {
    compText:"",
    missingBit:""
  },
  {
    compText:"",
    missingBit:""
  },
  {
    compText:"",
    missingBit:""
  },
  {
    compText:"",
    missingBit:""
  },
  {
    compText:"",
    missingBit:""
  },
  {
    compText:"",
    missingBit:""
  }
];

var scienceDeck = [
  {
    compText:"",
    missingBit:""
  },
  {
    compText:"",
    missingBit:""
  },
  {
    compText:"",
    missingBit:""
  },
  {
    compText:"",
    missingBit:""
  },
  {
    compText:"",
    missingBit:""
  },
  {
    compText:"",
    missingBit:""
  },
  {
    compText:"",
    missingBit:""
  },
  {
    compText:"",
    missingBit:""
  },
  {
    compText:"",
    missingBit:""
  }
];

function quizMe(){
  inquirer.prompt([

  ]).then(function(inquirerResponse){
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    },
    {
      type: "list",
      message: "Which would you like to be quized on?",
      choices: ["history", "science"],
      name: "pokemon"
    }
  });//-end of .then-
}//-end of quizMe-
