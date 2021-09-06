import React from 'react';
import Nav from './nav';
import styled from './index.css';

type LayoutProps = {
  children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className={styled.layout}>
    <Nav />
    <div className={styled.contentLayout}>
      {children}
    </div>
  </div>
);

export default Layout;
