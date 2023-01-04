import { useRouteError } from 'react-router-dom';

const ErrorElement = () => {
  let error = useRouteError();

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center p-4'>
      <p className='text-red-500'>Something went wrong!</p>
      <span className='text-sm max-w-md text-center mt-4'>{String(error)}</span>
    </div>
  );
};

export { ErrorElement };
