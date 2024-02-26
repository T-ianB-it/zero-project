//import '../css/style.css'
import { typeTriunfoCard , typePaloCard , typeSpecialCard } from './cards.js'

//Declaraciones
const numPlayers = 3;
let namesPlayers = ['Lolo', 'Lupi', 'Mamen']

const widthCard = 12 ;
const heightCard = 17 ;
const numCardsTarot = 78;

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

//DOM



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
  
//--------------------------------- Baraja completa------------------------------------//

const deckOfCardsCompleted = deckOfPaloCards.concat(deckOfTriundoCards,specialCard);

//--------------------------------- Mano de cartas ------------------------------------//

let setAleatoryIndx = (x) => Math.floor(Math.random()*x+1);

let setCard = (totalCards, indx) => totalCards[indx];

let setCardsToPlayer = () => {
  let deckOfPlayerCards = [];

  for(let i = 0 ; i < numPlayers ; i++){
    deckOfPlayerCards.push(setCard(deckOfCardsCompleted, setAleatoryIndx(numCardsTarot)));
  }
  return deckOfPlayerCards;
};

//console.log(setCardsToPlayer());
//--------------------------------- Todos los jugadores ------------------------------------//
class gamePlayer {
  constructor(name,cards){
    this.name = name;
    this.cards = cards;
  }
}

for(let i = 0 ; i < numPlayers ; i++){
  tarotPlayers.push(new gamePlayer(namesPlayers[i],setCardsToPlayer()));
}


//tarotPlayers[0].cards = setCardsToPlayer();


console.log(tarotPlayers[0].cards);

//document.querySelector('#barajaContainer').innerHTML = `
//  <div id="cards-container">
//    <div class="card">
//
//    </div>
//    <p>Coje tu carta</p>
//  </div>
//`
