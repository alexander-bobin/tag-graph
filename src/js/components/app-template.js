import React from 'react';
import TagList from './filters/tag-list';
import DataTable from './table/data-table';
import DateFilter from './filters/date-filter';

export default () => {
  return (
    <div>
      <h1>View your ledger</h1>
      <TagList />
      <DateFilter />
      <DataTable />
    </div>
  );
}
