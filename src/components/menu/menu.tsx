import classNames from 'classnames';
import React from 'react';

export interface MenuProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

// 🔰 Menu component
const prefixCls = 'menu';
const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    style,
    children,
  } = props;

  const classes = classNames(
    prefixCls,
    className,
  );

  const node = (
    <ul style={style} className={classes}>
      {children}
    </ul>
  );

  return node;
};

export default Menu;
