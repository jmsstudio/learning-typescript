import { NegotiationList } from '../models/NegotiationList';
import { Negotiation } from '../models/Negotiation';
import { NegotiationView, MessageView } from '../views/index';
import { LogExecutionTime } from '../helpers/decorators/LogExecutionTime';
import { InjectDomElement } from '../helpers/decorators/InjectDomElement';

export class NegotiationController {
  @InjectDomElement('#date')
  private _dateInput: JQuery;
  @InjectDomElement('#amount')
  private _amountInput: JQuery;
  @InjectDomElement('#value')
  private _valueInput: JQuery;
  private _negotiations = new NegotiationList();
  private _negotiationView = new NegotiationView('#negotiationTable');
  private _messageView = new MessageView('#mensagemView');

  constructor() {
    this._negotiationView.update(this._negotiations);
  }

  @LogExecutionTime()
  add(event: Event) {
    event.preventDefault();

    const negotiationDate = new Date(this._dateInput.val().replace(/-/g, ','));

    if (this.isWeekend(negotiationDate)) {
      this._messageView.update('Negotiation date cannot happen on weekends.');
      this._dateInput.val('');
      return;
    }

    const negotiation = new Negotiation(
      negotiationDate,
      parseInt(this._amountInput.val()),
      parseFloat(this._valueInput.val())
    );

    this._negotiations.add(negotiation);

    this._negotiationView.update(this._negotiations);
    this._messageView.update('Negotiation added sucessfully!');
  }

  private isWeekend(date: Date): boolean {
    return date.getDay() == DayOfWeek.Sunday || date.getDay() == DayOfWeek.Saturday;
  }
}

enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}
