import { Button } from '@/components/Button';
import { _formatNumber } from '@/utils/formatNumber';

const COLUMNS = () => {
  return [
    {
      title: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'CAR ID',
      dataIndex: 'carId',
    },
    {
      title: 'IN STOCK',
      dataIndex: 'inStock',
      render: (e: boolean) => (
        <span className={`${e ? 'text-lime-500' : 'text-orange-700'}`}>
          {e ? 'YES' : 'NO'}
        </span>
      ),
    },
    {
      title: 'HP',
      dataIndex: 'hp',
    },
    {
      title: 'PRICE',
      dataIndex: 'price',
      render: (e: number) => _formatNumber(e),
    },
    {
      title: 'COLOR',
      dataIndex: 'color',
    },
    {
      title: 'EDIT',
      dataIndex: '',
      render: () => <Button />,
    },
  ];
};

export default COLUMNS;
