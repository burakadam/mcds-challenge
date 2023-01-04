import { ILayoutProps } from '.';

const Layout = (props: ILayoutProps) => (
  <div>
    <header>
      <a href='/'>HOME</a>
    </header>
    {props.children}
  </div>
);

export { Layout };
