require('./letter.js')

function Word(word){
    var alpha = 'abcdefghijklmnopqrstuvwxyz';
    this.letters=[];
    for(i in word){
        this.letters.push(new Letter(word[i]))
    }

    this.showWord = function(){
        var theWord = '';
        for(i in this.letters){
            if(this.letters[i].beenGuessed){
                theWord+=this.letters[i]
            }
            else{
                theWord+='_';
            }
        }
    }
}