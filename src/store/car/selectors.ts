import { REDUCERS } from '@/constants/reducers';

import { RootState } from '../store';

const selectCar = (state: RootState) => state[REDUCERS.CAR];

const listLoaded = (state: RootState) => selectCar(state).loadings.list;

export const carSelectors = { listLoaded };
