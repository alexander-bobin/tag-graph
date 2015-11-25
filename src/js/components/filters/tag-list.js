import React from 'react';
import _ from 'lodash';
import AppStore from '../../stores/app-store';
import AppActions from '../../actions/app-actions';
import StoreWatchMixin from '../../mixins/store-watch-mixin';

const getState = () => {
  return {
    selected: AppStore.getFilterTags(),
    tags: AppStore.getTags()
  };
}

const TagList = (props) => {
  var tags = props.tags ? _.map(props.tags, (tag, id) => {
    return <li key={id} className={props.selected === id ? "current": "" }>
      <a href="#" onClick={AppActions.filterTag.bind(null, id)}>{tag}</a>
    </li>;
  }) : "";
  return (
    <div className="tag-list filter">
      <ul>{tags}</ul>
    </div>
  );
}

export default StoreWatchMixin(TagList, getState);
