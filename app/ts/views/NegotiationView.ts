class NegotiationView {
  private element: Element;

  constructor(elementSelector: string) {
    this.element = document.querySelector(elementSelector);
  }

  update(negotiations: NegotiationList) {
    this.element.innerHTML = this.template(negotiations);
  }

  template(negotiations: NegotiationList) {
    return `
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>DATA</th>
                <th>QUANTIDADE</th>
                <th>VALOR</th>
                <th>VOLUME</th>
            </tr>
        </thead>

        <tbody>
          ${negotiations
            .list()
            .map(
              neg => `
                <tr>
                    <td>${FormatterHelper.formatDate(neg.date)}</td>
                    <td>${neg.amount}</td>
                    <td>${neg.value}</td>
                    <td>${neg.volume}</td>
                </tr>`
            )
            .join('')}
        </tbody>

        <tfoot>
        </tfoot>
    </table>`;
  }
}
