// Import stylesheets
import './style.css';
import { Car } from './Models/car.model';
import { Bolt } from './Models/bolt.model';
import { CarDoor } from './Models/carDoor.model';
import { CarEngine } from './Models/carEngine.model';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;

let bt = new Bolt("castle","one", 20);

let engine = new CarEngine(bt, 5, 2);

let door = new CarDoor(2, 2, 2, "steel & coting fribric", "new Type", bt);

let carobj = new Car(1524,"BMW", "Made Black", bt, door, engine);

console.log(carobj);

bt.boltFunction();
engine.engineFunction();
door.doorFunction();
carobj.feature();

