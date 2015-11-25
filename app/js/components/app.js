import React from 'react';
import TagList from './tag-list';
import DataTable from './data-table';
import DateFilter from './date-filter';

export default () => {
  return (
    <div>
      <TagList />
      <DateFilter />
      <DataTable />
    </div>
  );
}
