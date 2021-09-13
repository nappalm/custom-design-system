import React from 'react';
import Base, { BaseProps } from './base';

// 🔰 Text component
const Text: React.FC<BaseProps> = ({ ...restProps }) => {
  const renderNode = () => {
    if (restProps.code) return 'code';
    return 'span';
  };

  const node = (
    <Base
      component={renderNode()}
      {...restProps}
    />
  );

  return node;
};

export default Text;
