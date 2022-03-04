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
  constructor() {
  }
  feature() {
    console.log(
      `This car 0 to 90 in 30 sec.\n Automatic Climate Control.\n Music System.`
    );
  }
}
