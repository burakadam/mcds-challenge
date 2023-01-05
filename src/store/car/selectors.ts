import { REDUCERS } from '@/constants/reducers';

import { RootState } from '../store';

const selectCar = (state: RootState) => state[REDUCERS.CAR];

const listLoaded = (state: RootState) => selectCar(state).loadings.list;
const carList = (state: RootState) => selectCar(state).carList;

export const carSelectors = { listLoaded, carList };
