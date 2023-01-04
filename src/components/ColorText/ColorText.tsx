import { IColorTextProps } from '.';

const ColorText = (props: IColorTextProps) => (
  <span style={{ color: props.color }} className='uppercase'>
    {props.color}
  </span>
);

export { ColorText };
