import React from 'react';

export default React.createClass({
  render: function () {
    return (
      <tr>
        <td>{this.props.data.description}</td>
        <td>{this.props.data.credit}</td>
        <td>{this.props.data.debit}</td>
      </tr>
    );
  }
});
