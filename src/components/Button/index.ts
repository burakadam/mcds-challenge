export interface IButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export * from './Button';
