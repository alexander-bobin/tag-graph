// TODO: Handel date range click

import React from 'react';
import moment from 'moment';
import AppStore from '../stores/app-store';
import AppActions from '../actions/app-actions';
import StoreWatchMixin from '../mixins/store-watch-mixin';

const getState = () => {
  var dates = AppStore.getFilterDates();
  return {
    from: dates.dateFrom,
    to: dates.dateTo
  }
}

const onChangeFrom = (e) => {
  var date = e.target.value ? moment(e.target.value, 'YYYY-MM-DD') : null;
  AppActions.filterDateFrom(date);
}
const onChangeTo = (e) => {
  var date = e.target.value ? moment(e.target.value, 'YYYY-MM-DD') : null;
  AppActions.filterDateTo(date);
}

const DateRange = (props) => {
  return (
    <form>
      <label labelFor="date-from">from</label>
      <input 
        type="date"
        name="date-from"
        id="date-from"
        onChange={onChangeFrom}
        value={props.from ? moment(props.from).format('YYYY-MM-DD') : ''} />
      <label labelFor="date-to">to</label>
      <input
        type="date"
        name="date-to"
        id="date-to"
        onChange={onChangeTo}
        value={props.to ? moment(props.to).format('YYYY-MM-DD') : ''} />
    </form>
  )
}

export default StoreWatchMixin(DateRange, getState);
