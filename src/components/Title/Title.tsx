import { ITitleProps } from '.';

const Title = (props: ITitleProps) => (
  <h2 className='text-lg font-bold text-center my-4'>{props.title}</h2>
);

export { Title };
