import { ICarItem } from '@/types/carItem';

export interface ICarState {
  carList: ICarItem[];
  loadings: {
    list: boolean;
    detail: boolean;
  };
  errors: {
    list: string | null;
    detail: string | null;
  };
  detailData: ICarItem | null;
}

export * from './slice';
export { default as carReducer } from './slice';
