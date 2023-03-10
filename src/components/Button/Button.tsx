import { IButtonProps } from '.';

const Button = ({
  onClick,
  text,
  type = 'button',
  className = '',
  ...rest
}: IButtonProps) => (
  <button
    className={`h-9 rounded-full text-sm font-semibold whitespace-nowrap px-6 focus:outline-none focus:ring-2 bg-sky-50 text-sky-600 hover:bg-sky-100 hover:text-sky-700 focus:ring-sky-600 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500 ${className}`}
    onClick={onClick}
    type={type}
    {...rest}
  >
    {text}
  </button>
);

export { Button };
