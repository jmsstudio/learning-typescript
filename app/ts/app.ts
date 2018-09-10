const negotiation = new Negotiation(new Date(), 12, 100);
console.log(negotiation.value);

const controller = new NegotiationController();

document.querySelector('.form').addEventListener('submit', controller.add.bind(controller));
