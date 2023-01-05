import { Layout } from '@/components/Layout';
import { Loading } from '@/components/Loading';
import { Table } from '@/components/Table';
import { fetchCarList } from '@/services/car/api';
import { carActions } from '@/store/car';
import { carSelectors } from '@/store/car/selectors';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useEffect } from 'react';
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
  const dispatch = useAppDispatch();
  const isListLoaded = useAppSelector(carSelectors.listLoaded);
  const carList = useAppSelector(carSelectors.carList);

  useEffect(() => {
    const getList = async () => {
      dispatch(carActions.getListDataRequest());
      const { success, error, data } = await fetchCarList();

      if (success) dispatch(carActions.getListDataSuccess({ data }));
      else dispatch(carActions.getListDataError({ error }));
    };

    getList();
  }, [dispatch]);

  if (isListLoaded) return <Loading />;

  return (
    <Layout>
      <h2 className='text-lg font-bold text-blue-500 text-center my-4'>
        CAR LIST
      </h2>
      {carList ? (
        <Table columns={COLUMNS()} dataSource={carList} />
      ) : (
        <p className='text-center my-10 text-red-400'>List is empty</p>
      )}
    </Layout>
  );
}

export { Home };
