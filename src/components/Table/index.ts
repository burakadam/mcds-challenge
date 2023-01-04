type TColumn = { dataIndex: string; title: string };

export interface ITableProps {
  dataSource: Array<any>;
  columns: Array<TColumn>;
}

export * from './Table';
