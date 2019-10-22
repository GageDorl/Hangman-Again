var stuff = require('./letter.js')

function Word(word){
    
    this.letters=[];
    for(i in word){
        if('abcdefghijklmnopqrstuvwxyz'.indexOf(word[i].toLowerCase())!=-1){
        this.letters.push(new stuff.Letter(word[i]))
        }
        else{
            this.letters.push(word[i])
        }
    }

    this.toString = function(){
        var theWord = '';
        for(i in this.letters){
            if('abcdefghijklmnopqrstuvwxyz'.indexOf(word[i].toLowerCase())!=-1){
                if(this.letters[i].beenGuessed){
                    theWord+=this.letters[i].letter+' '
                }
                else{
                    theWord+='_'+' ';
                }
            }
            else{
                theWord+=word[i];
            }
        }
        return console.log('\n'+theWord+'\n');
    }
    this.guessLetter = function(guess){
        letterFound=false;
        for(i in this.letters){
            if('abcdefghijklmnopqrstuvwxyz'.indexOf(word[i].toLowerCase())!=-1){
                if(this.letters[i].tryGuess(guess)){
                    letterFound=true;
                }
            }
        }
        return letterFound;
    }
}
module.exports = {
    Word:Word
}
