import { dispatch, register } from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import { EventEmitter } from 'events';
import moment from 'moment';
import { getData } from '../misc/api';
import { getTagList, getCoercedData, getFilteredData } from '../misc/helpers';

const CHANGE_EVENT = 'change';

var _ledgerItems = [];
var _tags = null;
var _selectedTags = [];
var _selectedDates = {
  dateFrom: moment().subtract(1, 'years').toDate(),
  dateTo: moment().toDate()
};
const _dateRangePresets = [{
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
}];

const _filterByTag = (tag) => {
  if (_selectedTags[0] === tag) { tag = null };
  _selectedTags = tag ? [tag] : [];
}

const _filterByDateRange = (dateFrom, dateTo) => {
  _selectedDates.dateFrom = dateFrom;
  _selectedDates.dateTo = dateTo;
}
const _filterByDateFrom = (date) => {
  _selectedDates.dateFrom = date;
}
const _filterByDateTo = (date) => {
  _selectedDates.dateTo = to;
}

const AppStore = Object.assign(EventEmitter.prototype, {
  emitChange(){
    this.emit( CHANGE_EVENT )
  },

  addChangeListener( callback ){
    this.on( CHANGE_EVENT, callback )
  },

  removeChangeListener( callback ){
    this.removeListener( CHANGE_EVENT, callback )
  },

  getTags() {
    return _tags;
  },
  getFilterTags() {
    return _selectedTags[0];
  },
  getFilterDates() {
    return _selectedDates;
  },
  getDateRangePresets() {
    return _dateRangePresets;
  },
  getLedger(){
    var data = getFilteredData(_ledgerItems, _selectedTags[0], _selectedDates.dateFrom, _selectedDates.dateTo);
    return data;
  },

  dispatcherIndex: register( function( action ){
    switch(action.actionType){
      case AppConstants.FILTER_TAG:
        _filterByTag( action.tag );
        break;
      case AppConstants.FILTER_DATE_FROM_TO:
        _filterByDateRange(action.dateFrom, action.dateTo);
        break;
      case AppConstants.FILTER_DATE_FROM:
        _filterByDateFrom(action.date);
        break;
      case AppConstants.FILTER_DATE_TO:
        _filterByDateTo(action.date);
        break;
    }
    AppStore.emitChange();
  })
});

var loadBaseData = () => {
  getData().then(data => {
    _ledgerItems = getCoercedData(data.data);
    _tags = getTagList(_ledgerItems);
    AppStore.emitChange();
  });
}

loadBaseData();

export default AppStore;
