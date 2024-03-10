import '../css/style.css'
import { typeTriunfoCard , typePaloCard , typeSpecialCard } from './cards.js'

//Declaraciones
const numPlayers = 3;
let namesPlayers;

const widthCard = 12 ;
const heightCard = 17 ;
const numCardsTarot = 78;
let deckOfCardsCompleted = [];
let shufleDeckOfCardsComplet = [];

const kindsPaloCards = ['corazones','diamantes','picas','treboles'];
const identityPaloCards = ['1','2','3','4','5','6','7','8','9','10','v','c','d','r'];
const valuePaloCards = [1,2,3,4,5,6,7,8,9,10,2,3,4,5];
const deckOfPaloCards = [];

const numCardsTriunfo = 21;
const identityTriundoCards = ['1','2','3','4','5','6','7','8','9','10','11','11','13','14','15','16','17','18','19','20','21'];
const valueTriunfoCards = [5,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,5];
const deckOfTriundoCards = [];

const identitySpecialCard = 0;

let tarotPlayers = [] ; 

//------------------------------ Baraja de Palos---------------------------------------//

for(let i = 0 ; i < kindsPaloCards.length ; i++){
  for(let j = 0 ; j < identityPaloCards.length ; j++){
    deckOfPaloCards.push(new typePaloCard (heightCard, widthCard, identityPaloCards[j], kindsPaloCards[i], valuePaloCards[j]))
  }
}

//---------------------------------- Baraja de Triunfos -----------------------------------//

for(let i=0 ; i < numCardsTriunfo ; i++){
  deckOfTriundoCards.push(new typeTriunfoCard(heightCard,widthCard,identityTriundoCards[i],valueTriunfoCards[i]));
}

//--------------------------------- Carta especial------------------------------------//

const specialCard =  new typeSpecialCard(heightCard, widthCard, identitySpecialCard);
  
//--------------------------------- Mano de cartas ------------------------------------//

deckOfCardsCompleted = deckOfPaloCards.concat(deckOfTriundoCards,specialCard);

let setAleatoryIndx = (max) => Math.floor ( Math.random() * max);

let setCard = (totalCards, indx) => totalCards[indx];

//--------------------------------- Baraja completa mezclada ------------------------------------//

while (shufleDeckOfCardsComplet.length < deckOfCardsCompleted.length) {

  let candidateToShuffle = setCard(deckOfCardsCompleted, setAleatoryIndx(numCardsTarot)); 
  let findIndxToShuffleDeck = shufleDeckOfCardsComplet.indexOf(candidateToShuffle);
  
  if (findIndxToShuffleDeck > -1) {
    candidateToShuffle = setCard(deckOfCardsCompleted, setAleatoryIndx(numCardsTarot));
  }else if(findIndxToShuffleDeck === -1){
    shufleDeckOfCardsComplet.push(candidateToShuffle);
  }

}

//--------------------------------- Todos los jugadores ------------------------------------//

let setCardsToPlayer = (deck) => {
  let deckOfPlayerCards = [];
  for(let i = 0; i < numPlayers; i++){
    deckOfPlayerCards.push(deck.shift());
  }
  return deckOfPlayerCards;
};


namesPlayers = ['palyer 1', 'palyer 2', 'palyer 3'] ;

class gamePlayer {
  constructor(name,cards){
    this.name = name;
    this.cards = cards;
  }
}

for(let i = 0 ; i < numPlayers ; i++){
  tarotPlayers.push(new gamePlayer(namesPlayers[i],setCardsToPlayer(shufleDeckOfCardsComplet)));
}

//--------------------------------- DOM ------------------------------------//

const allCardTag = document.querySelectorAll('.cards');
const buttonPlay = document.querySelector('#buttonPlay');
const buttonLoad = document.querySelector('#buttonLoad')


//for(let i = 0; i < allCardTag.length; i++ ){
//  allCardTag[i].appendChild(document.createElement('i')).innerHTML=`${tarotPlayers[i].cards[i].identificador()}`;
//  allCardTag[i].appendChild(document.createElement('i')).innerHTML=`${tarotPlayers[i].cards[i].valor()}`;
//} 


buttonPlay.addEventListener('click', ()=>{
  for(let i = 0; i < allCardTag.length; i++ ){
    allCardTag[i].classList.remove('backCards')
    allCardTag[i].classList.add('showCards');

  } 
})

buttonLoad.addEventListener('click', ()=>{
  for(let i = 0; i < allCardTag.length; i++ ){
    allCardTag[i].classList.replace('showCards','backCards')
  } 
})







