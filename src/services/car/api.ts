import DATA from '@/data/data.json';
import { ICarItem } from '@/types/carItem';

interface ICarObject {
  success: boolean;
  data: ICarItem | ICarItem[] | null;
  error: string | null;
  all?: ICarItem[];
}

// NOTE: to mock car data dummmy promise created

const fetchCarList = async (): Promise<ICarObject> => {
  try {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve({ success: true, data: DATA, error: null });
      }, 10)
    );
  } catch (error) {
    return {
      success: false,
      data: null,
      error: String(error),
    };
  }
};

// NOTE: to mock car detail data dummmy promise created

const fetchCarDetail = async (
  carId: string,
  carList?: ICarItem[]
): Promise<ICarObject> => {
  try {
    return new Promise((resolve) =>
      setTimeout(() => {
        const selectedList = carList || DATA;
        const selectedData = selectedList.find((item) => item.carId === carId);

        if (selectedData)
          resolve({
            success: true,
            data: selectedData,
            error: null,
            all: selectedList, // NOTE: to show changed item of mock data i need to set carList
          });
        else throw new Error('car can not be found');
      }, 10)
    );
  } catch (error) {
    return {
      success: false,
      data: null,
      error: String(error),
    };
  }
};

export { fetchCarList, fetchCarDetail };
