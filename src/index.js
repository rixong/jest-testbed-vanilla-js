import { sum, time } from './sum.js';
import sayName from './sayName.js';
import getName from './getName.js';

const sayNameSubmit = document.getElementById('inputName');
sayNameSubmit.addEventListener('submit', (e) => getName(e));

console.log(sum(14, 55));
console.log(time);
console.log(sayName('Ben Franklin'));
