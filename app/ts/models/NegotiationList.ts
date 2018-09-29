import { Negotiation } from './Negotiation';

export class NegotiationList {
  private negotiations: Array<Negotiation> = [];

  add(negotiation: Negotiation): void {
    this.negotiations.push(negotiation);
  }

  list(): Negotiation[] {
    return [].concat(this.negotiations);
  }
}
