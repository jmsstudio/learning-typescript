class NegotiationController {
  private _dateInput: HTMLInputElement;
  private _amountInput: HTMLInputElement;
  private _valueInput: HTMLInputElement;

  constructor() {
    this._dateInput = <HTMLInputElement>document.getElementById('date');
    this._amountInput = <HTMLInputElement>document.getElementById('amount');
    this._valueInput = <HTMLInputElement>document.getElementById('value');
  }

  add(event: Event) {
    event.preventDefault();

    const negotiation = new Negotiation(
      new Date(this._dateInput.value.replace(/-/g, ',')),
      parseInt(this._amountInput.value),
      parseFloat(this._valueInput.value)
    );
    console.log(negotiation);
  }
}
