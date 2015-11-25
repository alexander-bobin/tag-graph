import React from 'react';
import _ from 'lodash';
import DataRow from './data-row';
import AppStore from '../../stores/app-store';
import StoreWatchMixin from '../../mixins/store-watch-mixin';

const getState = () => {
  return {
    data: AppStore.getLedger()
  }
}

const DataTable = (props) => {
  var creditTotal = 0, debitTotal = 0;
  _.each(props.data, function (entry, i) {
    if (entry.credit) { creditTotal += entry.credit; }
    if (entry.debit) { debitTotal += entry.debit; }
  });
  creditTotal = creditTotal.toFixed(2);
  debitTotal = debitTotal.toFixed(2);
  var rows = _.map(props.data, function (entry, i) {
    return <DataRow key={i} data={entry} />
  });
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th className="number">Credit</th>
          <th className="number">Debit</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
      <tfoot className="total">
        <tr>
          <td></td>
          <td></td>
          <td className="number">{creditTotal}</td>
          <td className="number">{debitTotal}</td>
        </tr>
      </tfoot>
    </table>
  )
}

export default StoreWatchMixin(DataTable, getState);
