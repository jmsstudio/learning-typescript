import { Negotiation } from './Negotiation';
import { Printable } from './Printable';

export class NegotiationList extends Printable {
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
}
