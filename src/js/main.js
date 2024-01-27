import '../css/style.css'
//import javascriptLogo from '../assets/images/javascript.svg'
//import viteLogo from '../assets/images/vite.svg'
//import { setupCounter } from './counter.js'
import { triunfocard , palocard , specialcard } from './cards.js'

//Declaraciones
const anchoCard = 12 ;
const altoCard = 17 ;
//

const triunfoDos = new  triunfocard(28,56,"1",5);
const triunfoUno = new  triunfocard(28,56,"1",5);
const triunfoTres = new  triunfocard(28,56,"1",5);
const triunfoCuatro = new  triunfocard(28,56,"1",5);

console.log(triunfoUno.triunfoCardAncho);

document.querySelector('#barajaContainer').innerHTML = `
  <div id="cards-container">
    <div class="card">

    </div>
    <p>Coje tu carta</p>
  </div>
`


setupCounter(document.querySelector('#counter'));

