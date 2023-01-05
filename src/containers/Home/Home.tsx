import { useEffect } from 'react';

import { Layout } from '@/components/Layout';
import { Loading } from '@/components/Loading';
import { Table } from '@/components/Table';

import { fetchCarList } from '@/services/car/api';
import { carActions } from '@/store/car';
import { carSelectors } from '@/store/car/selectors';
import { useAppDispatch, useAppSelector } from '@/store/hooks';

import COLUMNS from './columns';
import { Title } from '@/components/Title';

function Home() {
  const dispatch = useAppDispatch();

  const isListLoaded = useAppSelector(carSelectors.listLoaded);
  const carList = useAppSelector(carSelectors.carList);
  const carListError = useAppSelector(carSelectors.carListError);

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
      <Title title='CAR LIST' />
      {carList ? (
        <Table columns={COLUMNS()} dataSource={carList} />
      ) : (
        <p className='text-center my-10 text-red-400'>List is empty</p>
      )}
      {carListError && (
        <p className='text-center my-10 text-red-400'>ERROR: {carListError}</p>
      )}
    </Layout>
  );
}

export { Home };
