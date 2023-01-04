import { IColorTextProps } from '.';

const ColorText = (props: IColorTextProps) => (
  <span style={{ color: props.color }}>{props.color}</span>
);

export { ColorText };
