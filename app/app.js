import React from 'react';

import { getLedger } from './api';
import { getUniqueTags } from './helpers';

import TagList from './tag-list';

export default class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = { tags: [] };
  }
  componentDidMount () {
    console.log("YO");
    getLedger().then(data => {
      this.setState({ 'tags': getUniqueTags(data.data) });
    });
  }
  render () {
    return <TagList tags={this.state.tags} />;
  }
}
