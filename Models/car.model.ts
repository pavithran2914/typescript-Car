import { Bolt } from './bolt.model';
import { CarDoor } from './carDoor.model';
import { CarEngine } from './carEngine.model';

export class Car {
  carNo: number;
  carBrand: string;
  color: string;
  bolt: Bolt;
  carDoor: CarDoor;
  carEngine: CarEngine;
  constructor(carNo: number, carBrand: string, color: string) {
    this.carNo = carNo;
    this.carBrand = carBrand;
    this.color = color;
    this.carDetial();
  }
  feature() {
    console.log(
      `This car 0 to 90 in 30 sec.\n Automatic Climate Control.\n Music System.`
    );
  }
  carDetial() {
    let bt: Bolt = new Bolt('castle', 'one', 20);
    let engine: CarEngine = new CarEngine(bt, 5, 2);
    let door: CarDoor = new CarDoor(2, 2, 2, 'steel & coting fribric', 'new Type', bt);
    bt.boltFunction();
    engine.engineFunction();
    door.doorFunction();
    console.log(bt, engine, door);
  }
}
