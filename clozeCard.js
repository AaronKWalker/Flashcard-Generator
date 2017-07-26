var BasicCard = require("./basicCard.js")

var ClozeCard = function(text, cloze){
  this.fullText = text;
  this.cloze = cloze;
  this.partialText = "";
  this.replaceCloze = function(text, cloze){
    this.partialText = text.replace(cloze, "............");
  };
};

// var textCard = new ClozeCard();
// textCard.replaceCloze("Hi Bye", "Bye");
// console.log(textCard);

module.exports = Clozecard;
