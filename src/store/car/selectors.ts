import { REDUCERS } from '@/constants/reducers';

import { RootState } from '../store';

const selectCar = (state: RootState) => state[REDUCERS.CAR];

const listLoaded = (state: RootState) => selectCar(state).loadings.list;
const carList = (state: RootState) => selectCar(state).carList;
const carListError = (state: RootState) => selectCar(state).errors.list;

const detailLoaded = (state: RootState) => selectCar(state).loadings.detail;
const detailData = (state: RootState) => selectCar(state).detailData;
const detailError = (state: RootState) => selectCar(state).errors.detail;

export const carSelectors = {
  listLoaded,
  carList,
  carListError,
  detailLoaded,
  detailData,
  detailError,
};
