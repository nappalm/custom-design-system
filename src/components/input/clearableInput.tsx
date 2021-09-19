import React from 'react';
import classNames from 'classnames';
import { InputProps } from './input';
import './index.less';

interface InternalClearableInputProps extends InputProps {
  prefixCls: string;
}

const ClearableInput: React.FC<InternalClearableInputProps> = (props) => {
  const {
    prefix,
    suffix,
    prefixCls,
    className,
    style,
    children,
    bordered = true,
    size = 'medium',
    type,
    disabled,
  } = props;

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-${size}`]: size,
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${disabled}`]: disabled,
      [`${prefixCls}-no-border`]: !bordered,
    },
    className,
  );

  const node = (
    <div className={classes} style={style}>
      { prefix
        && (
        <div className="input-prefix">
          {prefix}
        </div>
        )}
      <div className="input-el">
        {children}
      </div>
      { suffix
        && (
        <div className="input-suffix">
          {suffix}
        </div>
        )}
    </div>
  );

  return node;
};

export default ClearableInput;
