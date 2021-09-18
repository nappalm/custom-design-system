import classNames from 'classnames';
import React from 'react';
import { MenuProps } from './menu';

interface ItemProps extends MenuProps {
  key?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

const prefixCls = 'menu-item';
const Item: React.FC<ItemProps> = (props) => {
  const {
    className,
    style,
    key,
    children,
    icon,
  } = props;

  const classes = classNames(
    prefixCls,
    className,
  );

  const node = (
    <li className={classes} style={style} key={key}>
      { icon
        && (
        <div className="menu-item-icon">
          {icon}
        </div>
        )}
      {children}
    </li>
  );

  return node;
};

export default Item;
