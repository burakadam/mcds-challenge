import { REDUCERS } from '@/constants/reducers';
import { createSlice } from '@reduxjs/toolkit';
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
    getListDataError(state) {
      state.carList = [];
      state.loadings.list = false;
    },
  },
});

export const carActions = carSlice.actions;

export default carSlice.reducer;
