import { Bolt } from './bolt.model';

export class CarDoor {
  door: number;
  mirrorOnDoor: number;
  doorGlass: number;
  doorMatral: string;
  doorType: string;
  bolt: Bolt;
  constructor(door: number, mirrorOnDoor: number, doorGlass: number, doorMatral: string, doorType: string, bolt: Bolt) {
    this.door = door;
    this.mirrorOnDoor = mirrorOnDoor;
    this.doorGlass = doorGlass;
    this.doorMatral = doorMatral;
    this.doorType = doorType;
    this.bolt = bolt;
  }
  doorFunction() {
    console.log(
      `This door open & close automatically.`
    );
  }
}
