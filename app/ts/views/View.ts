import { LogExecutionTime } from '../helpers/decorators/LogExecutionTime';

export abstract class View<T> {
  private _element: JQuery;
  private escapeHtml: boolean;

  constructor(elementSelector: string, escapeHtml: boolean = false) {
    this._element = $(elementSelector);
    this.escapeHtml = escapeHtml;
  }

  @LogExecutionTime('s')
  update(model: T): void {
    let template = this.template(model);
    if (this.escapeHtml) {
      template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }

    this._element.html(template);
  }

  abstract template(negotiations: T): string;
}
