import classNames from 'classnames';
import React from 'react';

export interface TypographyProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  prefixCls?: string;
}

interface InternalTypographyProps extends TypographyProps {
  component?: string;
}

// 🔰 Typography component
const prefixCls = 'typography';
const Typography: React.FC<InternalTypographyProps> = (props) => {
  const {
    className,
    style,
    children,
    component,
    ...restProps
  } = props;

  const classes = classNames(
    prefixCls,
    className,
  );

  const Component = component as any;

  const node = (
    <Component
      className={classes}
      style={style}
      {...restProps}
    >
      {children}
    </Component>
  );

  return node;
};

export default Typography;
