class NegotiationController {
  private _dateInput: HTMLInputElement;
  private _amountInput: HTMLInputElement;
  private _valueInput: HTMLInputElement;
  private _negotiations = new NegotiationList();
  private _negotiationView = new NegotiationView('#negotiationTable');

  constructor() {
    this._dateInput = <HTMLInputElement>document.getElementById('date');
    this._amountInput = <HTMLInputElement>document.getElementById('amount');
    this._valueInput = <HTMLInputElement>document.getElementById('value');

    this._negotiationView.update(this._negotiations);
  }

  add(event: Event) {
    event.preventDefault();

    const negotiation = new Negotiation(
      new Date(this._dateInput.value.replace(/-/g, ',')),
      parseInt(this._amountInput.value),
      parseFloat(this._valueInput.value)
    );

    this._negotiations.add(negotiation);

    this._negotiationView.update(this._negotiations);
  }
}
