'use strict';

const score0 =document.querySelector('#score--0');
const score1 =document.querySelector('#score--1');
const dice =document.querySelector('.dice');
const newGame=document.querySelector('.btn--new');
const hold =document.querySelector('.btn--hold');
const rollbtn =document.querySelector('.btn--roll');
const player0 =document.querySelector('.player--0');
const player1 =document.querySelector('.player--1');
let activePlayer =0;
let currentScore =0;
let scores=[0,0];
let playing = true;

const switchPlayer =function(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    activePlayer = activePlayer ===0 ? 1 : 0;
    currentScore =0;
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
}

score0.textContent=0;
score1.textContent=0;
dice.classList.add('hidden')

rollbtn.addEventListener('click',function(){
    if (playing){

    
    const numb =Math.trunc(Math.random() *6 + 1);
    
    dice.classList.remove('hidden');
    dice.src=`dice-${numb}.png`;

    if(numb!==1){
        currentScore +=numb;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        
    }
    else{
    //switch player
    switchPlayer();
    }

}
    
})

// hold button

hold.addEventListener('click',function(){
    if(playing){

    
    scores[activePlayer] +=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];

    if(scores[activePlayer] >=20){
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        dice.classList.add('hidden');
        
   
    }
    else{
switchPlayer();
    }
    }


})

newGame.addEventListener('click',function(){
  document.getElementById('score--0').textContent=0;
  document.getElementById('score--1').textContent=0;
  document.getElementById('current--0').textContent=0;
  document.getElementById('current--1').textContent=0;
  currentScore = 0;
  scores=[0,0];
  
  

  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  document.querySelector('.player--0').classList.add('player--active');
  playing=true;




})
