var ClozeCard = function(text, cloze){
  if (this instanceof ClozeCard) {
    this.fullText = text;
    this.cloze = cloze;
    this.partialText = "";
    this.replaceCloze = function(){
      if (!this.fullText.includes(this.cloze)) throw "missing cloze input";
      this.partialText = this.fullText.replace(this.cloze, "............");
    };
    this.test = function(){
      console.log(this.fullText + " : " + this.partialText + " : " + this.cloze);
    };
  }else {
    return new MyClass(text, cloze);
  }
};

module.exports = ClozeCard;
