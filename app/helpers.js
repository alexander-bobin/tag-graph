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
    .map(function (entry) {
      return _tagsToArray(entry.tags);
    })
    .flatten()
    .uniq()
    .sort()
    .indexBy(_getTagId)
    .value();
};

var getCoercedData = function (data) {
  // clone because we are altering the original objects
  var cloned = _.cloneDeep(data);
  return _.map(cloned, function (entry) {
    entry.tags = _tagsToArray(entry.tags);
    entry.date = moment(entry.date, "DD/MM/YYYY");
    return entry;
  });
};

var getFilteredData = function (data, tag, from, to) {
  console.log(tag, from, to);
  return _.filter(data, function (entry) {
    return (
      (!tag || entry.tags.indexOf(tag) !== -1) &&
      entry.date >= from && 
      entry.date <= to
    );
  });
};

export { getTagList, getCoercedData, getFilteredData };
