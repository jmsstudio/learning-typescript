import { Negotiation } from './Negotiation';
import { Printable } from './Printable';
import { Comparable } from './Comparable';

export class NegotiationList implements Printable, Comparable<NegotiationList> {
  private negotiations: Array<Negotiation> = [];

  add(negotiation: Negotiation): void {
    this.negotiations.push(negotiation);
  }

  list(): Negotiation[] {
    return ([] as Negotiation[]).concat(this.negotiations);
  }

  asString(): string {
    return this.negotiations.map(n => n.asString()).join(', ');
  }

  isEqual(negotiations: NegotiationList): boolean {
    return JSON.stringify(this.negotiations) == JSON.stringify(negotiations);
  }
}
