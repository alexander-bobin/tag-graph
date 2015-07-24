import React from 'react';
import moment from 'moment';

export default React.createClass({
  propTypes: {
    from: React.PropTypes.instanceOf(Date).isRequired,
    to: React.PropTypes.instanceOf(Date).isRequired
  },
  update: function (e) {
    var fromText = this.refs.from.value,
        toText = this.refs.to.value,
        from = moment(fromText, 'YYYY-MM-DD').toDate(),
        to = moment(toText, 'YYYY-MM-DD').toDate();
    if (fromText && toText && from.getTime() < to.getTime()) {
      this.props.update.call(null, from, to);
    }
  },
  render: function () {
    return (
      <div className="date-range filter">
        <label labelFor="date-from">from</label>
        <input 
          ref="from"
          type="date"
          name="date-from"
          id="date-from"
          onChange={this.update}
          defaultValue={moment(this.props.from).format('YYYY-MM-DD')} />
        <label labelFor="date-to">to</label>
        <input
          ref="to"
          type="date"
          name="date-to"
          id="date-to"
          onChange={this.update}
          defaultValue={moment(this.props.to).format('YYYY-MM-DD')} />
      </div>
    );
  }
});
