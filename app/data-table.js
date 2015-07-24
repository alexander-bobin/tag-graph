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
    var rows = _.map(this.props.data, function (entry, i) {
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
      </table>
    );
  }
});
