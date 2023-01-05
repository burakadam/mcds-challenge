import { REDUCERS } from '@/constants/reducers';

import { RootState } from '../store';

const selectCar = (state: RootState) => state[REDUCERS.CAR];

const listLoaded = (state: RootState) => selectCar(state).loadings.list;
const carList = (state: RootState) => selectCar(state).carList;
const carListError = (state: RootState) => selectCar(state).errors.list;

export const carSelectors = { listLoaded, carList, carListError };
