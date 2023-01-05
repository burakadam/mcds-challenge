import * as Yup from 'yup';

export const DETAIL_SCHEMA = Yup.object().shape({
  price: Yup.number().min(10000),
});
