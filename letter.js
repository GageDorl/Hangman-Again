function Letter(letter){
    this.letter = letter.toLowerCase();
    this.beenGuessed = false;
    this.returnLetter = function(){
        if(this.beenGuessed){
            return this.letter;
        }
    }
    this.tryGuess = function(guess){
        if(guess.toLowerCase()==this.letter){
            this.beenGuessed=true;
        }
    }
}
