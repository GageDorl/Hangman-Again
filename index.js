var words = require('./word.js');
var wordArr = ['Javascript','Hypertext Markup Language','Cascading Style Sheet','Node Server','mySQL','inquirer','Bootstrap','jQuery']
var inq = require('inquirer');
function startGame(){
    guessesLeft=10;
    wordFinished=false;
    secretWord = new words.Word(wordArr[Math.floor(Math.random()*wordArr.length)]);
    guessWord();
}
function guessWord(){
    secretWord.toString()
    if(guessesLeft>0&&wordFinished==false){
        
        inq.prompt([
            {
                name:'letterGuess',
                message:'Guess a letter!',
                validate:function(thing){
                    if('abcdefghijklmnopqrstuvwxyz'.indexOf(thing.toLowerCase())!='-1'){
                        return true;
                    }
                }
            }
        ]).then(function(data){
            if(secretWord.guessLetter(data.letterGuess)){
                console.log("\x1b[32m",'CORRECT!!!')  
            }
            else{
                console.log("\x1b[31m",'INCORRECT!!!'+'\nGuesses Left: '+guessesLeft)
                guessesLeft--;
            }
            lettersFound=0;
            theLength=0;
            for(i in secretWord.letters){
                if(typeof secretWord.letters[i]=="object"){
                    if(secretWord.letters[i].beenGuessed){
                        lettersFound++;
                    }
                }
                else{
                    lettersFound++;
                }
                theLength++;
            }
            
            
            if(lettersFound==theLength){
                wordFinished=true;
            }
            guessWord();
        })
    }
    else if(guessesLeft==0){
        console.log('You lost')
    }
    else if(wordFinished){
        inq.prompt([
            {
                name:'again',
                message:'Want to play again?',
                type:'confirm',
            }
        ]).then(function(data){
            if(data.again){
                startGame();
            }
            else{
                console.log("K bye")
            }
        })
    }
}
startGame();
