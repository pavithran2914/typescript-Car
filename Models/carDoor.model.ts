import { Bolt } from './bolt.model';

export class CarDoor {
  door: number;
  mirrorOnDoor: number;
  doorGlass: number;
  doorMatral: string;
  doorType: string;
  bolt: Bolt;
  constructor() {
  }
  doorFunction() {
    console.log(
      `This door open & close automatically.`
    );
  }
}
