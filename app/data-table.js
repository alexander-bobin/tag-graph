import React from 'react';
import _ from 'lodash';

import DataRow from './data-row';

export default React.createClass({
  getDefaultProps: function () {
    return {
      data: [
        { tags: [] } 
      ]
    };
  },
  render: function () {
    var creditTotal = 0,
        debitTotal = 0;
    var rows = _.map(this.props.data, function (entry, i) {
        if (entry.credit) { creditTotal += entry.credit; }
        if (entry.debit) { debitTotal += entry.debit; }
        return <DataRow key={i} data={entry} />
      });
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Credit</th>
            <th>Debit</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
        <tfoot className="total">
          <tr>
            <td></td>
            <td></td>
            <td>{creditTotal}</td>
            <td>{debitTotal}</td>
          </tr>
        </tfoot>
      </table>
    );
  }
});
