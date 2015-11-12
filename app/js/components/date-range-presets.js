import React from 'react';
import moment from 'moment';
import _ from 'lodash';

export default React.createClass({
  propTypes: {
    items: React.PropTypes.array
  },
  getDefaultProps: function () {
    return { items: [] }
  },
  update: function (from, to, e) {
    this.props.update.call(null, from, to);
  },
  render: function () {
    var items = _.map(this.props.items, (item, i) => {
      var itemUpdate = this.props.update.bind(null, item.from, item.to);
      return <li key={i}><a href="#" onClick={itemUpdate}>{item.name}</a></li>;
    });
    return (
      <div className="date-range-presets">
        <ul>
          {items}
        </ul>
      </div>
    );
  }
});
