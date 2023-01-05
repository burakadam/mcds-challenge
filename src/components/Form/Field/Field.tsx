import { IFieldProps } from '.';

const Field = ({ htmlFor, text, children }: IFieldProps) => (
  <div className='bg-white px-4 py-2 first:pt-4 first:rounded-tl-lg first:rounded-tr-lg shadow-md '>
    <label htmlFor={htmlFor} className='block text-sm ml-1 mb-2 font-semibold'>
      {text}
    </label>
    {children}
  </div>
);

export { Field };
