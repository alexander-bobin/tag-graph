import _ from 'lodash';
import moment from 'moment';

var _getTagId = function (tag) {
  return tag.replace(/ /g, '-');
};
var _tagsToArray = function (tags) {
  var tagsArray = tags ? tags.split(",") : [];
  return _.map(tagsArray, function (tag) {
    return _.trim(tag);
  });
};

var getTagList = function (data) {
  return _.chain(data)
    .pluck("tags")
    .flatten()
    .uniq()
    .sort()
    .indexBy(_getTagId)
    .value();
};

var getCoercedData = function (data) {
  return _.map(data, function (entry) {
    entry.debit = entry.debit ? entry.debit * 1 : null;
    entry.credit = entry.credit ? entry.credit * 1 : null;
    if (entry.balance) entry.balance = entry.balance * 1;
    entry.tags = _tagsToArray(entry.tags);
    entry.date = moment(entry.date, "DD/MM/YYYY");
    return entry;
  });
};

var getFilteredData = function (data, tag, from, to) {
  return _.filter(data, function (entry) {
    return (
      (!tag || entry.tags.indexOf(tag) !== -1) &&
      entry.date >= from && 
      entry.date <= to
    );
  });
};

export { getTagList, getCoercedData, getFilteredData };
