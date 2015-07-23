import React from 'react';

import { getLedger } from './api';
import { getUniqueTags } from './helpers';

import TagList from './tag-list';

export default React.createClass({
  getInitialState: function () {
    return {
      tags: [],
      selectedTag: 'accountants'
    };
  },
  componentDidMount: function () {
    getLedger().then(data => {
      this.setState({ 'tags': getUniqueTags(data.data) });
    });
  },
  updateTag: function (tagId, e) {
    this.setState({selectedTag: tagId});
  },
  render: function () {
    return <TagList
      tags={this.state.tags}
      selected={this.state.selectedTag}
      update={this.updateTag} />;
  }
});
