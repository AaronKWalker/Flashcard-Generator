var ClozeCard = require("./clozeCard.js");

var inquirer = require("inquirer");

var typeChosen

var c

var historyDeck = [
  {
    compText:"When Nazi Germany planned to invade the UK during WWII, Hitler name the planned invasion Operation Sealion",
    missingBit:"Operation Sealion"
  },
  {
    compText:"During the first times of exploration, the Western Hemisphere, in particular the Americas, were known as The New World",
    missingBit:"New World"
  },
  {
    compText:"	Abraham Lincoln, a US President, gave the famous Gettysburg Address Speech",
    missingBit:"Abraham Lincoln"
  },
  {
    compText:"The War of the Grand Alliance was also known as the Nine Years' War",
    missingBit:"Nine Years'"
  },
  {
    compText:"In 1938, the Anderson Shelter was designed from corrugated steel by William Paterson and Carl Kernson",
    missingBit:"Anderson Shelter"
  },
  {
    compText:"The First and Second Boer War was the name given to the South African Wars of 1880-1881 and 1899-1902",
    missingBit:"First and Second Boer War"
  },
  {
    compText:"6th June, 1944 was the date of D-Day",
    missingBit:"6th June, 1944"
  },
  {
    compText:"Hadrian's Wall is a famous wall, built by a Roman Emperor, that lies between Scotland and England",
    missingBit:"Hadrian's Wall"
  },
  {
    compText:"Dallas, Texas is the name of the city where John F. Kennedy was assassinated",
    missingBit:"Dallas, Texas"
  }
];

var scienceDeck = [
  {
    compText:"Albert Einstein created the famous equation E = mc2",
    missingBit:"Albert Einstein"
  },
  {
    compText:"Sir Isaac Newton discovered the law of gravity",
    missingBit:"Sir Isaac Newton"
  },
  {
    compText:"There are 206 bones in the human body",
    missingBit:"206"
  },
  {
    compText:"The letters DNA stand for Deoxyribonucleic Acid",
    missingBit:"Deoxyribonucleic Acid"
  },
  {
    compText:"The chemical element Helium has the symbol He",
    missingBit:"Helium"
  },
  {
    compText:"Fe is the Chemical Symbol for Iron",
    missingBit:"Fe"
  },
  {
    compText:"Mercury is the only metal that is liquid at room temperature",
    missingBit:"Mercury"
  },
  {
    compText:"Thomas Edison invented the gramophone",
    missingBit:"Thomas Edison"
  },
  {
    compText:"Sunlight provides Vitamin D to humans",
    missingBit:"D"
  }
];

function quizMe(){
  typeChosen = "";
  c = 0;
  inquirer.prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "username"
    },
    {
      type: "list",
      message: "Which would you like to be quized on?",
      choices: ["history", "science"],
      name: "userChoice"
    }
  ]).then(function(inqRes){
    if (inqRes.userChoice === "history"){
      console.log(inqRes.username + ", you have chosen history");
      typeChosen = "history";
      createCards();
    } else {
      console.log(inqRes.username + ", you have chosen science");
      typeChosen = "science";
      createCards();
    }
  });//--.then--
}//--quizMe--

function createCards(){
  if (typeChosen === "history") {
    if (c === historyDeck.length) {
      console.log("That's All Folks!");
      process.end;
    } else {
      var flashcard = new ClozeCard(historyDeck[c].compText, historyDeck[c].missingBit);
      flashcard.replaceCloze();
      displayCard(flashcard);
    }
  } else if (typeChosen === "science"){
    if (c === scienceDeck.length) {
      console.log("That's All Folks!");
      process.end;
    } else {
      var flashcard = new ClozeCard(scienceDeck[c].compText, scienceDeck[c].missingBit);
      flashcard.replaceCloze();
      displayCard(flashcard);
    }
  }
}//--createCards--

function displayCard(flashcard){
  inquirer.prompt([
    {
      type: "input",
      message: flashcard.partialText,
      name: "userAnswer"
    }
  ]).then(function(inqRes){
    if (inqRes.userAnswer == flashcard.cloze) {
      console.log("CORRECT!");
    } else {
      console.log("WRONG! The correct answer is: \n" + flashcard.cloze);
    }
    c++;
    createCards();
  });
}//--displayCard--

quizMe();
