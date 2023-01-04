import { ITableProps } from '.';

const Table = (props: ITableProps) => {
  return (
    <div className='max-md:overflow-x-scroll'>
      <table className='w-full text-center max-md:w-auto md:table-fixed '>
        <thead>
          <tr className='bg-secondary-off-white text-b1 text-supporting-border-gray'>
            {props.columns.map((column, index) => (
              <th key={`head_${index}`} className='py-4'>
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className='text-b1 font-semibold text-supporting-text-gray'>
          {props.dataSource.map((data, rowIndex) => {
            return (
              <tr
                key={`row_${rowIndex}`}
                className='border-b border-supporting-pale-purple'
              >
                {props.columns.map((column, colIndex) => (
                  <td
                    key={`cell_${rowIndex}_${colIndex}`}
                    className='py-4 max-md:px-4'
                  >
                    {data[column.dataIndex]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export { Table };
