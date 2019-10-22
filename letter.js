function Letter(letter){
    this.letter = letter;
    this.beenGuessed = false;
    this.returnLetter = function(){
        if(this.beenGuessed){
            return this.letter;
        }
    }
    this.tryGuess = function(guess){
        if(guess.toLowerCase()==this.letter.toLowerCase()){
            this.beenGuessed=true;
            return true;
        }
        return false;
    }
}
module.exports={
    Letter:Letter
}