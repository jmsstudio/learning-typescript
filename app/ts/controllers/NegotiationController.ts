class NegotiationController {
  private _dateInput: JQuery;
  private _amountInput: JQuery;
  private _valueInput: JQuery;
  private _negotiations = new NegotiationList();
  private _negotiationView = new NegotiationView('#negotiationTable');
  private _messageView = new MessageView('#mensagemView');

  constructor() {
    this._dateInput = $('#date');
    this._amountInput = $('#amount');
    this._valueInput = $('#value');

    this._negotiationView.update(this._negotiations);
  }

  add(event: Event) {
    event.preventDefault();

    const negotiation = new Negotiation(
      new Date(this._dateInput.val().replace(/-/g, ',')),
      parseInt(this._amountInput.val()),
      parseFloat(this._valueInput.val())
    );

    this._negotiations.add(negotiation);

    this._negotiationView.update(this._negotiations);
    this._messageView.update('Negotiation added sucessfully!');
  }
}
