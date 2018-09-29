export abstract class View<T> {
  private _element: JQuery;

  constructor(elementSelector: string) {
    this._element = $(elementSelector);
  }

  update(model: T): void {
    this._element.html(this.template(model));
  }

  abstract template(negotiations: T): string;
}
