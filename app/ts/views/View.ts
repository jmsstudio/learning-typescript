class View<T> {
  protected _element: Element;

  constructor(elementSelector: string) {
    this._element = document.querySelector(elementSelector);
  }

  template(negotiations: T): string {
    throw new Error('You need to implement the method template');
  }

  update(model: T): void {
    this._element.innerHTML = this.template(model);
  }
}
