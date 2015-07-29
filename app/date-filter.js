import React from 'react';
import DateRange from 'app/date-range';
import DateRangePresets from 'app/date-range-presets';

export default React.createClass({
  propTypes: {
    from: React.PropTypes.instanceOf(Date).isRequired,
    to: React.PropTypes.instanceOf(Date).isRequired,
    update: React.PropTypes.func,
    presets: React.PropTypes.array
  },
  getDefaultProps: function () {
    return {
      presets: []
    }
  },
  getInitialState: function () {
    return {
      showPresets: false
    }
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState({
      showPresets: nextProps.presets.length > 0
    });
  },
  render: function () {
    return (
      <div className="date-range filter">
        <DateRange
          from={this.props.from}
          to={this.props.to}
          update={this.props.update} />
        { this.state.showPresets ? <DateRangePresets items={this.props.presets} update={this.props.update} /> : null }
      </div>
    );
  }
});
