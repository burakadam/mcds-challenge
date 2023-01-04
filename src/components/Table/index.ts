export type TColumn = {
  dataIndex: string;
  title: string;
  render?: (e: any) => void;
};

export interface ITableProps {
  dataSource: Array<any>;
  columns: Array<TColumn>;
}

export * from './Table';
