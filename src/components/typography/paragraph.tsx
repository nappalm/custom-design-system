import React from 'react';
import Base, { BaseProps } from './base';

// 🔰 Paragraph component
const Paragraph: React.FC<BaseProps> = ({ ...restProps }) => {
  const node = (
    <Base
      component="p"
      {...restProps}
    />
  );

  return node;
};

export default Paragraph;
