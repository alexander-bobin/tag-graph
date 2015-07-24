import React from 'react';
import _ from 'lodash';

export default React.createClass({
  render: function () {
    var tags = _.map(this.props.tags, (id, tag) => {
      var tagUpdate = this.props.update.bind(null, id);
      return <li key={id} className={this.props.selected === id ? "current": "" }>
        <a href="#" onClick={tagUpdate}>{tag}</a>
      </li>;
    });
    return (
      <div className="tag-list filter">
        <ul>{tags}</ul>
      </div>
    );
  }
});
