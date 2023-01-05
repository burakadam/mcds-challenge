import { Button } from '@/components/Button';
import { Field, Input } from '@/components/Form';
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
          <Field htmlFor='firstName' text='Colors'>
            <>
              <input
                name='color'
                type='radio'
                value='red'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
              />
              <label htmlFor='blue' className='text-sm ml-2 mr-4 text-blue-500'>
                Blue
              </label>
            </>
          </Field>
          <div className='mt-4 flex justify-end'>
            <Button text='Cancel' className='mr-2 !bg-red-600' />
            <Button text='Save' />
          </div>
        </form>
      </div>
    </Layout>
  );
};

export { Detail };
