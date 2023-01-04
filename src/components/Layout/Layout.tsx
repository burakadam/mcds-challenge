import { ILayoutProps } from '.';
import { Header } from '../Header';

const Layout = (props: ILayoutProps) => (
  <div>
    <Header />
    {props.children}
  </div>
);

export { Layout };
