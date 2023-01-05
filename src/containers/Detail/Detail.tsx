import { useFormik } from 'formik';

import { Button } from '@/components/Button';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Field, Input } from '@/components/Form';
import { Layout } from '@/components/Layout';
import { Title } from '@/components/Title';
import { Loading } from '@/components/Loading';

import { carSelectors } from '@/store/car/selectors';
import { carActions } from '@/store/car';

import { fetchCarDetail } from '@/services/car/api';
import { DETAIL_SCHEMA } from './validation';
import { ICarItem } from '@/types/carItem';

const initialDetail = {
  carId: '0',
  car: 'Mercedes',
  inStock: false,
  hp: 110,
  price: 0,
  color: 'red',
  timeStamp: '0',
  id: 0,
};

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const detailLoaded = useSelector(carSelectors.detailLoaded);
  const detailData = useSelector(carSelectors.detailData);
  const carList = useSelector(carSelectors.carList);

  useEffect(() => {
    const getDetail = async () => {
      dispatch(carActions.getDetailRequest());
      const { success, error, data, all } = await fetchCarDetail(
        id as string,
        carList.length > 0 ? carList : undefined
      );

      if (success) {
        dispatch(carActions.getDetailSuccess({ data }));
        dispatch(carActions.getListDataSuccess({ data: all }));
      } else dispatch(carActions.getDetailError({ error }));
    };

    if (id) getDetail();
  }, [dispatch, id]);

  const handleSubmit = (data: ICarItem) => {
    const newCarList = carList.map((item) => (item.carId === id ? data : item));

    dispatch(carActions.saveDetail({ data: newCarList }));
    navigate('/');
  };

  const formik = useFormik({
    initialValues: detailData || initialDetail,
    enableReinitialize: true,
    validationSchema: DETAIL_SCHEMA,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleCancel = () => {
    dispatch(carActions.cancelDetail());
    navigate('/');
  };

  if (detailLoaded) return <Loading />;

  return (
    <Layout>
      <Title title='EDIT CAR DETAIL' />
      <div className='max-w-[300px] m-auto'>
        <form onSubmit={formik.handleSubmit}>
          <Field htmlFor='carId' text='Id'>
            <Input
              id='carId'
              name='carId'
              type='text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.carId}
              disabled
            />
          </Field>
          <Field htmlFor='car' text='Car'>
            <Input
              id='car'
              name='car'
              type='text'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.car}
              disabled
            />
          </Field>
          <Field htmlFor='inStock' text='In Stock'>
            <input
              id='inStock'
              name='inStock'
              type='checkbox'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values.inStock}
              className='w-4 h-4 ml-1'
            />
          </Field>
          <Field htmlFor='firstName' text='Horse Power'>
            <>
              <input
                id='hp'
                name='hp'
                type='range'
                min='100'
                max='550'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.hp}
                className='w-full'
              />
              <span className='block text-sm text-right text-gray-500'>
                {formik.values.hp}
              </span>
            </>
          </Field>
          <Field htmlFor='price' text='Price (Euro)'>
            <>
              <Input
                id='price'
                name='price'
                type='number'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.price}
              />
              {formik.errors.price && formik.touched.price ? (
                <span className='text-red-400 text-xs'>
                  {formik.errors.price}
                </span>
              ) : null}
            </>
          </Field>
          <Field htmlFor='firstName' text='Colors'>
            <>
              <input
                name='color'
                type='radio'
                value='red'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.color === 'red'}
              />
              <label htmlFor='red' className='text-sm ml-2 mr-4 text-red-400'>
                Red
              </label>
              <input
                name='color'
                type='radio'
                value='black'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.color === 'black'}
              />
              <label htmlFor='black' className='text-sm ml-2 mr-4'>
                Black
              </label>
              <input
                name='color'
                type='radio'
                value='blue'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.color === 'blue'}
              />
              <label htmlFor='blue' className='text-sm ml-2 mr-4 text-blue-500'>
                Blue
              </label>
            </>
          </Field>
          <div className='mt-4 flex justify-end'>
            <Button
              text='Cancel'
              className='mr-2 !bg-red-600'
              onClick={handleCancel}
            />
            <Button text='Save' type='submit' />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export { Detail };
