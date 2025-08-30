let randomNumber = parseInt(Math.random() * 100 + 1);

// all are global value
const submit = document.querySelector('#subt'); //  for butten
const userInput = document.querySelector('#guessField'); // for input fild
const guessSlot = document.querySelector('.guesses'); // guesing number for game pling
const remaining = document.querySelector('.lastResult');// how many chanch you have for gmaeplay
const lowOrHi = document.querySelector('.lowOrHi'); // Allart for tow low or High valu
const startOver = document.querySelector('.resultParas'); // Start new Geme butten when gameover

const pra = document.createElement('p'); // for p paragap

let prevGuess = [];// valu show an arry in 10 guess 
let numGuess = 1; // how many guess try user 

let playGame = true; // when game is playing notend or exight // allow to play game


//logic is hear 
if (playGame) {
     // u r avalabel
     submit.addEventListener('click', function(e){
          e.preventDefault()
          const guess = parseInt(userInput.value);
          console.log(guess);
          validateGuess(guess);
     });
}

function validateGuess(guess){
     // valid number or not  // l< value and value !- // validity chack // number in between 1-100

     // show a allert masege for less than 1,100 and not valid number(a,4d,#)
     if(isNaN(guess)){
          alert(`please Enter a Valide number `);
     }else if(guess < 1){
          alert(`please enter a number less than 1`);
     }else if(guess > 100){
          alert(`please enter a number less than 100`);
     }else{

          prevGuess.push(guess); // push and store enter value and save .
          if (numGuess === 11){ // when 10 guess is over 
               displayGuess(guess); // show last guess
               displayMessage(`Game over . Your random number was ${randomNumber}`); // show ganarated random number .
               endGame; // exit
          }else{
               displayGuess(guess); // show guess values
               checkGuess(guess); // chacking 
          }
     }
}

function checkGuess(guess){
     // massig print valid number low or haigh // chacking validet or not // !=

     if (guess === randomNumber){
          displayMessage(`Your guesseing Number is right`);
          endGame();
     }else if(guess < randomNumber){
        displayMessage(`Number is Too Low`);  
     }else if(guess > randomNumber){
          displayMessage(`Numberis Too Highe`);
     }
}

function displayGuess(guess){
     // value clining // updet array value // gee remaining

     userInput.value ='';
     guessSlot.innerHTML += `${11 - numGuess}`; // countdound
     numGuess++;
     remaining.innerHTML =`${11 - numGuess}`;
}

function displayMessage(message){
     // dome canation // input vale // inner html gess // adding number(array from user)

     lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
     // end
     userInput = '';
     userInput.setAttribute('disabled','');
     pra.classList.add('button');
     pra.innerHTML = `<h2 id ="newGame">Start New Game</h2>`
     startOver.appendChild(pra);
     playGame = false;
     newGame();
}

function newGame() {
     // start new game
     const newGameButton = document.querySelector('#newGame');
     newGameButton.addEventListener('click', function(e){
          randomNumber = parseInt(Math.random() * 100+ 1);
          prevGuess = [];
          numGuess = 1;
          guessSlot.innerHTML = '';
          remaining.innerHTML = `${11 - numGuess}`;
          userInput.removeAttribute('disabled');
          startOver.removeChild(pra);

          playGame = true;
     });
}