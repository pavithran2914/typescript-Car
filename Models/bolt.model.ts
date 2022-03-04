export class Bolt {
  boltName: string;
  boltType: string;
  quantity: number;
  constructor(boltName: string, boltType: string, quantity: number) {
    this.boltName = boltName;
    this.boltType = boltType;
    this.quantity = quantity;
  }
  boltFunction() {
    console.log('It is use to connect the car parts.');
  }
}
