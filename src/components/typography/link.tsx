import classNames from 'classnames';
import React from 'react';
import Base, { LinkProps } from './base';

// 🔰 Link component
const prefixCls = 'typography-link';
type InternalLinkProps = Omit<LinkProps, 'underline' | 'type'>;
const Link: React.FC<InternalLinkProps> = ({ className, ...restProps }) => {
  const classes = classNames(
    prefixCls,
    className,
  );

  const node = (
    <Base
      className={classes}
      component="a"
      {...restProps}
    />
  );

  return node;
};

export default Link;
