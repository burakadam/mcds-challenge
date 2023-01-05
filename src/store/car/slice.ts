import { createSlice } from '@reduxjs/toolkit';

import { REDUCERS } from '@/constants/reducers';

import { ICarState } from '.';

const initialState: ICarState = {
  carList: [],
  loadings: {
    list: false,
    detail: false,
  },
  errors: {
    list: null,
    detail: null,
  },
};

const carSlice = createSlice({
  name: REDUCERS.CAR,
  initialState,
  reducers: {
    getListDataRequest(state) {
      state.carList = [];
      state.loadings.list = true;
    },
    getListDataSuccess(state, action) {
      state.carList = action.payload.data;
      state.loadings.list = false;
    },
    getListDataError(state, action) {
      state.carList = [];
      state.loadings.list = false;
      state.errors.list = action.payload.error;
    },
  },
});

export const carActions = carSlice.actions;

export default carSlice.reducer;
