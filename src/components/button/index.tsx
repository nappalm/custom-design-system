import React from 'react';
import classnames from 'classnames';
import './index.less';
import LoadingButton from './loadingIcon';

// 🔥 Type button props
type ButtonProps = {
  children?: React.ReactNode;
  type?: 'primary' | 'secondary' | 'link' | 'text';
  disabled?: boolean;
  block?: boolean;
  loading?: boolean;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

// 🔰 Base button component
const prefixCls = 'btn';
const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    type = 'secondary',
    disabled = false,
    block = false,
    loading = false,
    size = 'medium',
    className,
    style,
  } = props;

  const classes = classnames(
    prefixCls,
    {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-disabled`]: disabled,
      [`${prefixCls}-block`]: block,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-${size}`]: size,
    },
    className,
  );

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    const { onClick } = props;

    if (disabled === true) {
      e.preventDefault();
      return;
    }

    (onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>)?.(e);
  };

  const node = (
    <button
      onClick={handleClick}
      type="button"
      className={classes}
      style={style}
    >
      { loading && <LoadingButton />}
      {children}
    </button>
  );

  return node;
};

export default Button;
