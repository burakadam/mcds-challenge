import DATA from '@/data/data.json';
import { ICarItem } from '@/types/carItem';

interface ICarObject {
  success: boolean;
  data: ICarItem[] | null;
  error: string | null;
}

// NOTE: to mock car data dummmy promise created

const fetchCarList = async (): Promise<ICarObject> => {
  try {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve({ success: true, data: DATA, error: null });
      }, 0)
    );
  } catch (error) {
    return {
      success: false,
      data: null,
      error: String(error),
    };
  }
};

export { fetchCarList };
