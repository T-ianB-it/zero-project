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

const identificadoresPalo = ['r','d','c','v',10,9,8,7,6,5,4,3,2,1];

//

for(let i =identificadoresPalo.length - 1; i >= 0 ; i--){
  //let corazonesCardsPalo = new palocard(altoCard,anchoCard,i,corazonesPalo,i);
  console.log(`Me repito ${i} veces`+identificadoresPalo[i]);
}

document.querySelector('#barajaContainer').innerHTML = `
  <div id="cards-container">
    <div class="card">

    </div>
    <p>Coje tu carta</p>
  </div>
`


//setupCounter(document.querySelector('#counter'));

