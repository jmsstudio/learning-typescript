import { Printable } from './Printable';

export class Negotiation extends Printable {
  constructor(readonly date: Date, readonly amount: number, readonly value: number) {
    super();
  }

  get volume() {
    return this.value * this.amount;
  }

  asString(): string {
    return `Date: ${this.date} | Amount: ${this.amount} | Value: ${this.value} | Volume: ${this.volume}`;
  }
}
