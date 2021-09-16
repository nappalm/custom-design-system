import classNames from 'classnames';
import React from 'react';
import { GridProps } from './grid';

type ColConfig = {
  span?: number;
  pull?: number;
  push?: number;
}

interface InternalColProps extends GridProps {
  span?: number;
  xll?: number | ColConfig;
  xl?: number | ColConfig;
  lg?: number | ColConfig;
  md?: number | ColConfig;
  sm?: number | ColConfig;
  xs?: number | ColConfig;
  cssGap?: number;
}

// 🔰 Col component
const prefixCls = 'col';
const Col: React.FC<InternalColProps> = (props) => {
  const {
    className,
    style,
    children,
    span,
    cssGap,
    xll,
    xl,
    lg,
    md,
    sm,
    xs,
  } = props;

  const classes = classNames(
    prefixCls,
    {
      [`${prefixCls}-span-${span}`]: span,
      [`${prefixCls}-xs-${xs}`]: xs,
      [`${prefixCls}-sm-${sm}`]: sm,
      [`${prefixCls}-md-${md}`]: md,
      [`${prefixCls}-lg-${lg}`]: lg,
      [`${prefixCls}-xl-${xl}`]: xl,
      [`${prefixCls}-xll-${xll}`]: xll,
    },
    className,
  );

  const node = (
    <div
      className={classes}
      style={{
        ...style,
        paddingLeft: cssGap,
        paddingRight: cssGap,
      }}
    >
      {children}
    </div>
  );

  return node;
};

export default Col;
