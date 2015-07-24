import React from 'react';

import { getLedger } from './api';
import { getTagList, getTaggedData, getDataByTag } from './helpers';

import TagList from './tag-list';
import DataTable from './data-table';

export default React.createClass({
  getInitialState: function () {
    return {
      tags: {},
      data: [],
      visibleData: [],
      selectedTag: null
    };
  },
  componentDidMount: function () {
    getLedger().then(data => {
      var taggedData = getTaggedData(data.data);
      this.setState({
        'tags': getTagList(data.data),
        'data': taggedData,
        'visibleData': taggedData
      });
    });
  },
  updateTag: function (tagId, e) {
    if (this.state.selectedTag === tagId) { tagId = null };
    this.setState({
      selectedTag: tagId,
      visibleData: getDataByTag(this.state.data, tagId)
    });
  },
  render: function () {
    return (
      <div>
        <TagList
          tags={this.state.tags}
          selected={this.state.selectedTag}
          update={this.updateTag} />
        <DataTable
          data={this.state.visibleData} />
      </div>
    );
  }
});
