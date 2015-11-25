import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import AppStore from '../../stores/app-store';
import AppActions from '../../actions/app-actions';
import StoreWatchMixin from '../../mixins/store-watch-mixin';

const getState = () => {
  var dates = AppStore.getFilterDates();
  return {
    items: AppStore.getDateRangePresets(),
    from: dates.dateFrom,
    to: dates.dateTo
  }
}

const DateRangePresets = (props) => {
  var items = _.map(props.items, (item, i) => {
    let itemUpdate = AppActions.filterDates.bind(null, item.from, item.to);
    let className = "";
    if (props.from && props.to && 
      moment(props.from).isSame(item.from) && moment(props.to).isSame(item.to)) {
      className = "current";
    }
    return <li key={i} className={className}><a href="#" onClick={itemUpdate}>{item.name}</a></li>;
  });
  return (
    <div className="date-range-presets">
      <ul>
        {items}
      </ul>
    </div>
  );
}

export default StoreWatchMixin(DateRangePresets, getState);
