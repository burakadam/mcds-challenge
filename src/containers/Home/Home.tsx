import { Layout } from '@/components/Layout';
import { Table } from '@/components/Table';
import { carSelectors } from '@/store/car/selectors';
import { useAppSelector } from '@/store/hooks';
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
  const isListLoaded = useAppSelector(carSelectors.listLoaded);
  return (
    <Layout>
      <p>{isListLoaded ? 'loaded' : 'loading'}</p>
      <Table columns={COLUMNS()} dataSource={d} />
    </Layout>
  );
}

export { Home };
