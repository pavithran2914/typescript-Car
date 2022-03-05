// Import stylesheets
import './style.css';
import { Car } from './Models/car.model';


// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let carobj = new Car(1524,"BMW", "Made Black");

console.log(carobj);


carobj.feature();

