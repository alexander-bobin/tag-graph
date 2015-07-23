import _ from 'lodash';

var getUniqueTags = function (data) {
  return _.chain(data)
    .map(function (entry) {
      return entry.tags ? entry.tags.split(",") : []
    })
    .flatten()
    .map(function (tag) {
      return _.trim(tag);
    })
    .uniq()
    .sort()
    .value();
};

export { getUniqueTags };
