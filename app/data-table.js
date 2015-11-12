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
  getInitialState: function () {
    return {
      creditTotal: 0,
      debitTotal: 0
    };
  },
  componentWillReceiveProps: function (nextProps) {
    var state = this.getInitialState();
    _.each(nextProps.data, function (entry, i) {
      if (entry.credit) { state.creditTotal += entry.credit; }
      if (entry.debit) { state.debitTotal += entry.debit; }
    });
    state.creditTotal = state.creditTotal.toFixed(2);
    state.debitTotal = state.debitTotal.toFixed(2);
    this.setState(state);
  },
  render: function () {
    var rows = _.map(this.props.data, function (entry, i) {
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
            <td className="number">{this.state.creditTotal}</td>
            <td className="number">{this.state.debitTotal}</td>
          </tr>
        </tfoot>
      </table>
    );
  }
});
