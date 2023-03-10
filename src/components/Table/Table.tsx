import { ITableProps } from '.';

const Table = (props: ITableProps) => {
  return (
    <>
      <div className='max-md:overflow-x-scroll bg-white shadow-md'>
        <table className='w-full text-center max-sm:w-auto md:table-fixed '>
          <thead>
            <tr className='bg-neutral-900 text-b1 text-white'>
              {props.columns.map((column, index) => (
                <th key={`head_${index}`} className='py-4 whitespace-nowrap'>
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className='text-b1 font-semibold text-neutral-900'>
            {props.dataSource.map((data, rowIndex) => {
              return (
                <tr
                  key={`row_${rowIndex}`}
                  className='border-b border-neutral-50'
                >
                  {props.columns.map((column, colIndex) => (
                    <td
                      key={`cell_${rowIndex}_${colIndex}`}
                      className='py-4 max-md:px-4 whitespace-nowrap'
                    >
                      {typeof column.render === 'function'
                        ? column.render(data[column.dataIndex])
                        : data[column.dataIndex]}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className='text-xs text-gray-400 text-right mr-2 mt-2 sm:hidden'>
        * You can scroll table
      </p>
    </>
  );
};

export { Table };
