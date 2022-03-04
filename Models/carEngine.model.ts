import { Bolt } from './bolt.model';

export class CarEngine {
  bolt: Bolt;
  tube: number;
  engineBody: number;
  constructor(bolt: Bolt, tube: number, engineBody: number) {
    this.bolt = bolt;
    this.tube = tube;
    this.engineBody = engineBody;
  }
  engineFunction() {
    console.log(
      `This car engine CC is 1000cc.\n It engine use to move the car.`
    );
  }
}
