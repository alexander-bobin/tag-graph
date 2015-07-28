import React from 'react';
import DateRange from 'app/date-range';

export default React.createClass({
  propTypes: {
    from: React.PropTypes.instanceOf(Date).isRequired,
    to: React.PropTypes.instanceOf(Date).isRequired,
    update: React.PropTypes.func
  },
  render: function () {
    return (
      <div className="date-range filter">
        <DateRange
          from={this.props.from}
          to={this.props.to}
          update={this.props.update} />
      </div>
    );
  }
});
