import React from 'react';
import Nav from './nav';
import styled from './index.css';

type LayoutProps = {
  children?: React.ReactChild
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styled.layout}>
      <Nav />
      <div className={styled.contentLayout}>
        {children}
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias, 
        reprehenderit? Error quod, eum iusto fuga quasi nisi ex? 
        Tempore facere beatae deleniti placeat recusandae! Hic commodi sit nam aut doloremque?
      </div>
    </div>
  )
}

export default Layout;