import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

export default class TagList extends React.Component {
  render () {
    var tags = _.map(this.props.tags, tag => {
      var id = tag.replace(/ /g, '-');
      return <li key={id}>
        <a href="#">{tag}</a>
      </li>;
    });
    return <div>
        <h2>Tags</h2>
        <ul>{tags}</ul>
      </div>;
  }
}
