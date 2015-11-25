import React from 'react';
import DateRange from './date-range';
import DateRangePresets from './date-range-presets';
import AppStore from '../stores/app-store';
import StoreWatchMixin from '../mixins/store-watch-mixin';

const getState = () => {
  return {
    showPresets: AppStore.getDateRangePresets().length > 0
  }
}

const DateFilter = (props) => {
  return (
    <div className="date-range filter">
      <DateRange />
      { props.showPresets ? <DateRangePresets /> : null }
    </div>
  )
}

export default StoreWatchMixin(DateFilter, getState);
