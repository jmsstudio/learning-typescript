import { Negotiation } from './models/Negotiation';
import { NegotiationController } from './controllers/NegotiationController';

const negotiation = new Negotiation(new Date(), 12, 100);
console.log(negotiation.value);

const controller = new NegotiationController();

$('.form').submit(controller.add.bind(controller));
