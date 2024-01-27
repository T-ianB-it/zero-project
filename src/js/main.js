import '../css/style.css'
import javascriptLogo from '../assets/images/javascript.svg'
import viteLogo from '../assets/images/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#baraja').innerHTML = `
  <div id="cards-container">
      <div class="card">

      </div>
  </div>
  <p>Coje tu carta</p>
`


setupCounter(document.querySelector('#counter'));

