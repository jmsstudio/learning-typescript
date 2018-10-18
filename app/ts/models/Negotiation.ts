import { Printable } from './Printable';
import { Comparable } from './Comparable';

export class Negotiation implements Printable, Comparable<Negotiation> {
  constructor(readonly date: Date, readonly amount: number, readonly value: number) {}

  get volume() {
    return this.value * this.amount;
  }

  asString(): string {
    return `Date: ${this.date} | Amount: ${this.amount} | Value: ${this.value} | Volume: ${this.volume}`;
  }

  /**
   * Checks if the negotiation dates (day, month and year) are equal
   *
   * @param negotiation
   */
  isEqual(negotiation: Negotiation): boolean {
    return (
      this.date.getDate() == negotiation.date.getDate() &&
      this.date.getMonth() == negotiation.date.getMonth() &&
      this.date.getFullYear() == negotiation.date.getFullYear()
    );
  }
}
