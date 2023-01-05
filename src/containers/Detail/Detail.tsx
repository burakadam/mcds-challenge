import { Button } from '@/components/Button';
import { Layout } from '@/components/Layout';
import { Title } from '@/components/Title';
import { useFormik } from 'formik';

const Detail = () => {
  const formik = useFormik({
    initialValues: {
      carId: '1',
      car: 'Mercedes',
      inStock: false,
      hp: 110,
      price: 100,
      color: 'red',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Layout>
      <Title title='EDIT CAR DETAIL' />
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='firstName'>Id</label>
        <input
          id='carId'
          name='carId'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.carId}
        />
        <label htmlFor='firstName'>Car</label>
        <input
          id='car'
          name='car'
          type='text'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.car}
        />
        <label htmlFor='firstName'>In Stock</label>
        <input
          id='inStock'
          name='inStock'
          type='checkbox'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          checked={formik.values.inStock}
        />
        <label htmlFor='firstName'>Horse Power</label>
        <input
          id='hp'
          name='hp'
          type='range'
          min='100'
          max='550'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.hp}
        />
        <span>{formik.values.hp}</span>
        <label htmlFor='firstName'>Price</label>
        <input
          name='color'
          type='radio'
          value='red'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label htmlFor='red'>Red</label>
        <input
          name='color'
          type='radio'
          value='black'
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <label htmlFor='black'>Black</label>
        <Button text='Save' />
      </form>
    </Layout>
  );
};

export { Detail };
