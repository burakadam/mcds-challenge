import { Layout } from '@/components/Layout';
import { Table } from '@/components/Table';
import COLUMNS from './columns';

const d = [
  {
    timeStamp: '1672870421049',
    id: 1,
    carId: 'CAR-HTK-123',
    inStock: true,
    hp: 125,
    price: 50000000,
    color: 'red',
  },
];

function Home() {
  return (
    <Layout>
      <Table columns={COLUMNS()} dataSource={d} />
    </Layout>
  );
}

export { Home };
