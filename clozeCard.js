var BasicCard = require("./basicCard.js")

var ClozeCard = function(text, cloze){
  this.fullText = text;
  this.cloze = cloze;
  this.replaceCloze = function(text, cloze){
    var replace = text.replace(cloze, "............");
    return replace;
  };
  this.partialText = replace;
};
