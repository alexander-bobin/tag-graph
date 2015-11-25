import AppConstants from '../constants/app-constants';
import { dispatch, register } from '../dispatchers/app-dispatcher';

export default {
  filterTag (tag) {
    dispatch({
      actionType: AppConstants.FILTER_TAG, tag
    })
  },
  filterDates (dateFrom, dateTo) {
    dispatch({
      actionType: AppConstants.FILTER_DATE_FROM_TO, dateFrom, dateTo
    })
  },
  filterDateFrom (date) {
    dispatch({
      actionType: AppConstants.FILTER_DATE_FROM, date
    })
  },
  filterDateTo (date) {
    dispatch({
      actionType: AppConstants.FILTER_DATE_TO, date
    })
  }
}
