import React from 'react';
import moment from 'moment';

import { getLedger } from './api';
import { getTagList, getCoercedData, getFilteredData } from './helpers';

import TagList from './tag-list';
import DataTable from './data-table';
import DateFilter from './date-filter';

export default React.createClass({
  getInitialState: function () {
    return {
      tags: {},
      data: [],
      visibleData: [],
      selectedTag: null,
      dateFrom: moment().subtract(1, 'years').toDate(),
      dateTo: moment().toDate(),
      dateRangePresets: [{
        name: "12/13 personal",
        from: new Date(2012, 3, 6),
        to: new Date(2013, 3, 5)
      },{
        name: "13/14 personal",
        from: new Date(2013, 3, 6),
        to: new Date(2014, 3, 5)
      },{
        name: "14/15 personal",
        from: new Date(2014, 3, 6),
        to: new Date(2015, 3, 5)
      },{
        name: "15/16 personal",
        from: new Date(2015, 3, 6),
        to: new Date(2016, 3, 5)
      }]
    };
  },
  componentDidMount: function () {
    getLedger().then(data => {
      var coercedData = getCoercedData(data.data);
      this.setState({
        'tags': getTagList(data.data),
        'data': coercedData,
        'visibleData': getFilteredData(
          coercedData,
          this.state.selectedTag,
          this.state.dateFrom,
          this.state.dateTo
        )
      });
    });
  },
  updateTag: function (tagId) {
    if (this.state.selectedTag === tagId) { tagId = null };
    this.setState({
      selectedTag: tagId,
      visibleData: getFilteredData(this.state.data, tagId, this.state.dateFrom, this.state.dateTo)
    });
  },
  updateDates: function (from, to) {
    this.setState({
      dateFrom: from,
      dateTo: to,
      visibleData: getFilteredData(this.state.data, this.state.selectedTag, from, to)
    })
  },
  render: function () {
    return (
      <div>
        <TagList
          tags={this.state.tags}
          selected={this.state.selectedTag}
          update={this.updateTag} />
        <DateFilter
          from={this.state.dateFrom}
          to={this.state.dateTo}
          presets={this.state.dateRangePresets}
          update={this.updateDates} />
        <DataTable
          data={this.state.visibleData} />
      </div>
    );
  }
});
