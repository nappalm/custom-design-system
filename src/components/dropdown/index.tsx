/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import classNames from 'classnames';
import React, { useState } from 'react';
import './index.less';

export interface DropdownMenu {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  overlay?: React.ReactNode;
  trigger?: 'click' | 'hover';
  visible?: boolean;
  placement?: 'bottom' | 'top';
}

// 🔰 Dropdown component
const prefixCls = 'dropdown';
const Dropdown: React.FC<DropdownMenu> = (props) => {
  const [toggleVisible, updateToggleVisible] = useState<boolean>(false);

  const {
    className,
    style,
    children,
    overlay,
    trigger = 'hover',
    visible,
    placement = 'bottom',
  } = props;

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-trigger-${trigger}`]: trigger,
      [`${prefixCls}-placement-${placement}`]: placement,
      [`${prefixCls}-visible`]: visible || toggleVisible,
    },
    className,
  );

  const node = (
    <div style={style} className={classes}>
      <div
        className="dropdown-el"
        onBlur={() => updateToggleVisible(false)}
        onClick={() => updateToggleVisible(!toggleVisible)}
      >
        {children}
      </div>
      <div className="dropdown-overlay">
        <div className="dropdown-content">
          {overlay}
        </div>
      </div>
    </div>
  );

  return node;
};

export default Dropdown;
