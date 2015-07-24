import _ from 'lodash';

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

var getTaggedData = function (data) {
  var cloned = _.cloneDeep(data);
  return _.map(cloned, function (entry) {
    entry.tags = _tagsToArray(entry.tags);
    return entry;
  });
};

var getDataByTag = function (data, tag) {
  return _.filter(data, function (entry) {
    if (!tag) return entry;
    return entry.tags.indexOf(tag) !== -1;
  });
};

export { getTagList, getTaggedData, getDataByTag };
