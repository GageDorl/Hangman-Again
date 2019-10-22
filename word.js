var stuff = require('./letter.js')

function Word(word){
    var alpha = 'abcdefghijklmnopqrstuvwxyz';
    this.letters=[];
    for(i in word){
        this.letters.push(new stuff.Letter(word[i]))
    }

    this.showWord = function(){
        var theWord = '';
        for(i in this.letters){
            if(this.letters[i].beenGuessed){
                theWord+=this.letters[i].letter+' '
            }
            else{
                theWord+='_'+' ';
            }
        }
        return theWord;
    }
    this.guessLetter = function(guess){
        for(i in this.letters){
            this.letters[i].tryGuess(guess);
        }
    }
}
