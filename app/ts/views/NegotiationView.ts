import { FormatterHelper } from '../helpers/FormatterHelper';
import { NegotiationList } from '../models/index';
import { View } from './View';

export class NegotiationView extends View<NegotiationList> {
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
