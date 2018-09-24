abstract class View<T> {
  private _element: Element;

  constructor(elementSelector: string) {
    this._element = document.querySelector(elementSelector);
  }

  update(model: T): void {
    this._element.innerHTML = this.template(model);
  }

  abstract template(negotiations: T): string;
}
