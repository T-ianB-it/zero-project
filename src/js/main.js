import '../css/style.css'
//import javascriptLogo from '../assets/images/javascript.svg'
//import viteLogo from '../assets/images/vite.svg'
//import { setupCounter } from './counter.js'
import { triunfocard , palocard , specialcard } from './cards.js'

//Declaraciones
const anchoCard = 12 ;
const altoCard = 17 ;

const numCardsTriunfo = 21;
const numCardsSpecial = 1;

const corazonesPalo = 'corazones';
const diamantesPalo = 'diamantes';
const picasPalo = 'picas';
const trebolesPalo = 'treboles';

const identificadoresPaloCards = [1,2,3,4,5,6,7,8,9,10,'v','c','d','r'];
const valoresPaloCards = [1,2,3,4,5,6,7,8,9,10,5,5,5,5];

let randomNumCard = function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

//

//for(let i = 0 ; i <= 3 ; i++){
  for(let j = 0 ; j <= identificadoresPaloCards.length -1  ; j++){
      const corazonesPaloHand = new palocard (altoCard, anchoCard, identificadoresPaloCards[j], corazonesPalo, valoresPaloCards[j]);
      console.log(corazonesPaloHand);
    }
//    for(let j = 0 ; j <= 14 -1  ; j++){
//      const corazonesPaloHand = new palocard (altoCard, anchoCard, identificadoresPaloCards[randomNumCard(14)], corazonesPalo, valoresPaloCards[j]);
//      console.log(corazonesPaloHand);
//    }
    for(let k = 0 ; k <= identificadoresPaloCards.length -1  ; k++){
      const diamantesPaloHand = new palocard (altoCard, anchoCard, identificadoresPaloCards[k], diamantesPalo, valoresPaloCards[k]);
      console.log(diamantesPaloHand);
    }
      for(let l = 0 ; l <= identificadoresPaloCards.length -1  ; l++){
        const picasPaloHand = new palocard (altoCard, anchoCard, identificadoresPaloCards[l], picasPalo, valoresPaloCards[l]);
        console.log(picasPaloHand);
      }
        for(let m = 0 ; m <= identificadoresPaloCards.length -1  ; m++){
          const trebolesPaloHand = new palocard (altoCard, anchoCard, identificadoresPaloCards[m], trebolesPalo, valoresPaloCards[m]);
          console.log(trebolesPaloHand);
        }

//break;
    //const diamantesPaloHand = new palocard (altoCard, anchoCard, identificadoresPaloCards[i], diamantesPalo, valoresPaloCards[i]);
    //console.log(`Me repito ${i} veces`+`y mi identificador es ${identificadoresPaloCards[i]}`);
    //console.log(diamantesPaloHand);
    //console.log(picasPaloHand);
//    console.log(trebolesPaloHand);
//}



document.querySelector('#barajaContainer').innerHTML = `
  <div id="cards-container">
    <div class="card">

    </div>
    <p>Coje tu carta</p>
  </div>
`


//setupCounter(document.querySelector('#counter'));

