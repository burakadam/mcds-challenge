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
  detailData: null,
};

const carSlice = createSlice({
  name: REDUCERS.CAR,
  initialState,
  reducers: {
    getListDataRequest(state) {
      state.carList = [];
      state.errors.list = null;
      state.loadings.list = true;
    },
    getListDataSuccess(state, action) {
      state.carList = action.payload.data;
      state.errors.list = null;
      state.loadings.list = false;
    },
    getListDataError(state, action) {
      state.carList = [];
      state.loadings.list = false;
      state.errors.list = action.payload.error;
    },
    getDetailRequest(state) {
      state.detailData = null;
      state.errors.detail = null;
      state.loadings.detail = true;
    },
    getDetailSuccess(state, action) {
      state.detailData = action.payload.data;
      state.errors.detail = null;
      state.loadings.detail = false;
    },
    getDetailError(state, action) {
      state.detailData = null;
      state.loadings.detail = false;
      state.errors.detail = action.payload.error;
    },
    cancelDetail(state) {
      state.detailData = null;
      state.loadings.detail = false;
      state.loadings.detail = false;
    },
  },
});

export const carActions = carSlice.actions;

export default carSlice.reducer;
