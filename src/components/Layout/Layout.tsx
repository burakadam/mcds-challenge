import { ILayoutProps } from '.';
import { Header } from '../Header';

const Layout = (props: ILayoutProps) => (
  <div className='bg-neutral-50'>
    <Header />
    <div className='mx-auto py-4 max-w-[900px] min-h-screen'>
      {props.children}
    </div>
  </div>
);

export { Layout };
