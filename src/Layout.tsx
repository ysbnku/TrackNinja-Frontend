//REACT
import React from 'react';

//COMPONENTS

interface LayoutProps {
  children?: JSX.Element;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <React.Fragment>
      <main>{props.children}</main>
    </React.Fragment>
  );
};

export default Layout;
