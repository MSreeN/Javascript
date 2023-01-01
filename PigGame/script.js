'use strict';
const fullPlayer0 = document.querySelector('.player--0');
const fullPlayer1 = document.querySelector('.player--1');
const plyr_0_score = document.querySelector('#score--0');
const plyr_1_score = document.querySelector('#score--1');
const currentScore0 = document.querySelector('#current--0');
const currentScore1 = document.querySelector('#current--1');
let currentScore = 0;
const playersScore = [0, 0];
let activePlayer = 0;
let isGameOn = true;

const dice_img = document.querySelector('.dice');
const btn_new = document.querySelector('.btn--new');
const btn_hold = document.querySelector('.btn--hold');
const btn_roll = document.querySelector('.btn--roll');

//starting conditions
plyr_0_score.textContent = 0;
plyr_1_score.textContent = 0;
dice_img.classList.add('hidden');

const rollDice = function () {

  if(isGameOn){

    //1. Generate a random number.
  
    const dice_num = Math.trunc(Math.random() * 6 + 1);
  
    //2. Setting the display to block and Display the dice image according to the
    //number generated
    dice_img.classList.remove('hidden');
    dice_img.src = `dice-${dice_num}.png`;
    console.log(dice_num);
  
    //3. If dice_num == 1 then switch player
    if (dice_num !== 1) {
      // value gets added to current player
      // IN the below line I am getting the score from
      // html element and saving it in the score variable.
      // Easy process could be is,
      // defining and initializing a variable to 0 outside function
      // because if we declare inside function it will get
      // reassigned to 0 every time we click roll dice
      // let score = Number(currentScore0.textContent);
      currentScore += dice_num;
      // console.log(`socre ${score}`);
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      changingPlayer()
    }
  }
};

btn_roll.addEventListener('click', rollDice);

function changingPlayer(){
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  fullPlayer0.classList.toggle('player--active');
  fullPlayer1.classList.toggle('player--active');
  activePlayer = activePlayer == 0 ? 1 : 0;
  currentScore = 0;

}

// function switchingUsers(userNum) {
//   return `currentScore${userNum}`;
// }

//hold button functionalities

const holdScore = function(){
  if(isGameOn){

    //1. No variable for total score is defined 
    // since we defined array that has two zeroes at 
    // position 0 and 1 serves as total scores for the players
    // we will just add current score of the current active user 
    // to their respective positions in Array. If current active 
    // user is 0 then current score will be added at 0th position
  
    playersScore[activePlayer] += currentScore;
  
    //2. Replicating the total scores into the element
    document.getElementById(`score--${activePlayer}`).textContent = playersScore[activePlayer];
  
    //Ending the game if score of current player is >= 100
    if (playersScore[activePlayer] >= 100) {
      isGameOn = false;
      document.querySelector(`.player--${activePlayer}`).classList
      .add('player--winner')
      document.querySelector(`.player--${activePlayer}`).classList
      .remove('plyer--active')
      dice_img.classList.add('hidden')
    }
  
    else{
      //switching player
      changingPlayer();
    }
    
  }
} 

//applying hold functionality

btn_hold.addEventListener('click', holdScore)

//Restarting the game

const newGame = function(){
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner')
  activePlayer = 0;
  isGameOn = true;
  fullPlayer0.classList.add('player--active');
  fullPlayer1.classList.remove('player--active');
  dice_img.classList.add('hidden')
  for(let i = 0; i< playersScore.length; i++){
    playersScore[i] = 0;
  }
  currentScore = 0;
  plyr_0_score.textContent = 0;
  plyr_1_score.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

}

//applying restart functionality to "New Game" button

btn_new.addEventListener('click', newGame)