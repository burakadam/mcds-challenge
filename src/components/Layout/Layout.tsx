import { ILayoutProps } from '.';
import { Header } from '../Header';

const Layout = (props: ILayoutProps) => (
  <div>
    <Header />
    <div className='mx-auto p-4 max-w-[900px]'>{props.children}</div>
  </div>
);

export { Layout };
