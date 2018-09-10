class NegotiationController {
  private dateInput;
  private amountInput;
  private valueInput;

  constructor() {
    this.dateInput = document.getElementById('date');
    this.amountInput = document.getElementById('amount');
    this.valueInput = document.getElementById('value');
  }

  add(event) {
    event.preventDefault();

    const negotiation = new Negotiation(this.dateInput.value, this.amountInput.value, this.valueInput.value);
    console.log(negotiation);
  }
}
