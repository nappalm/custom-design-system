import React from 'react';
import Base, { TitleProps } from './base';

// 🔰 Title component
const Title: React.FC<TitleProps> = ({ size, ...restProps }) => {
  const renderNode = () => {
    switch (size) {
      case 1: return 'h1';
      case 2: return 'h2';
      case 3: return 'h3';
      case 4: return 'h4';
      case 5: return 'h5';
      default: return 'h1';
    }
  };

  const node = (
    <Base
      component={renderNode()}
      {...restProps}
    />
  );

  return node;
};

export default Title;
