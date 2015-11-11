import React from 'react';
import moment from 'moment';

export default React.createClass({
  render: function () {
    return (
      <tr>
        <td width="10%">{moment(this.props.data.date).format("DD/MM/YY")}</td>
        <td width="50%">{this.props.data.reference}</td>
        <td width="20%">{this.props.data.credit}</td>
        <td width="20%">{this.props.data.debit}</td>
      </tr>
    );
  }
});
