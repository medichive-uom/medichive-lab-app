import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Reference',
    dataIndex: 'reference',
    filters: [
      {
        text: 'Joe',
        value: 'Joe',
      },
      {
        text: 'Jim',
        value: 'Jim',
      },
      {
        text: 'Submenu',
        value: 'Submenu',
        children: [
          {
            text: 'Green',
            value: 'Green',
          },
          {
            text: 'Black',
            value: 'Black',
          },
        ],
      },
    ],
    onFilter: (value, record) => record.reference.indexOf(value) === 0,
    sorter: (a, b) => a.reference.length - b.reference.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Collected Date',
    dataIndex: 'collectedDate',
  },
  {
    title: 'Report',
    dataIndex: 'report',
    filters: [
      {
        text: 'FBC',
        value: 'FBC',
      },
      {
        text: 'x-Ray',
        value: 'x-Ray',
      },
    ],
    onFilter: (value, record) => record.report.indexOf(value) === 0,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.name.length - b.name.length,
  },
];

const data = [
  {
    key: '1',
    reference: 'Ref 1',
    collectedDate: '2023-01-01',
    report: 'FBC',
    name: 'John Brown',
  },
  {
    key: '2',
    reference: 'Ref 2',
    collectedDate: '2023-01-02',
    report: 'X-Ray',
    name: 'Jim Green',
  },
  {
    key: '3',
    reference: 'Ref 3',
    collectedDate: '2023-01-03',
    report: 'Urine',
    name: 'Joe Black',
  },
  {
    key: '4',
    reference: 'Ref 4',
    collectedDate: '2023-01-04',
    report: 'FBC',
    name: 'Jim Red',
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const Reports = () => <Table columns={columns} dataSource={data} onChange={onChange} />;

export default Reports;
