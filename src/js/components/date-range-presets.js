// TODO: Handel date range click
import React from 'react';
import _ from 'lodash';
import AppStore from '../stores/app-store';
import AppActions from '../actions/app-actions';
import StoreWatchMixin from '../mixins/store-watch-mixin';

const getState = () => {
  return {
    items: AppStore.getDateRangePresets()
  }
}

const DateRangePresets = (props) => {
  var items = _.map(props.items, (item, i) => {
    let itemUpdate = AppActions.filterDates.bind(null, item.from, item.to);
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

export default StoreWatchMixin(DateRangePresets, getState);
