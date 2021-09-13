import classNames from 'classnames';
import React from 'react';
import Typography, { TypographyProps } from './typography';

interface EllipsisConfig {
  rows?: number;
  expand?: boolean;
}

// 🔰 Base component properties
export interface BaseProps extends TypographyProps {
  ellipsis?: boolean | EllipsisConfig;
  type?: 'primary' | 'gray' | 'danger' | 'warning',
  code?: boolean;
  underline?: boolean;
  bold?: boolean;
  italic?: boolean;
}

// 🔰 Title component properties
export interface TitleProps extends BaseProps {
  size?: 1 | 2 | 3 | 4 | 5;
}

// 🔰 Link component properties
export interface LinkProps extends BaseProps {
  href?: string;
  target?: '__blank' | '_self' | '_parent' | '_top';
}

// 🔰 Internal base properties
interface InternalBaseProps extends BaseProps {
  component: string;
}

const getEllipsis = (props?: BaseProps): EllipsisConfig => {
  if (!props?.ellipsis) return {};

  return {
    rows: 1,
    expand: false,
    ...typeof props.ellipsis === 'object' ? props.ellipsis : null,
  };
};

// 🔰 Base typography component
const Base: React.FC<InternalBaseProps> = (props) => {
  const {
    ellipsis,
    type,
    code,
    underline,
    bold,
    italic,
    children,
    style,
    component,
    className,
    ...restProps
  } = props;

  // 🔰 Get ellipsis
  const { rows, expand } = getEllipsis(props);
  const cssLineClamp = rows && rows > 1;

  const classes = classNames(
    className,
    {
      [`${'typography'}-${type}`]: type,
      [`${'typography'}-code`]: code,
      [`${'typography'}-underline`]: underline,
      [`${'typography'}-bold`]: bold,
      [`${'typography'}-italic`]: italic,
      [`${'typography'}-ellipsis`]: !expand && ellipsis,
      [`${'typography'}-ellipsis-multiline`]: !expand && cssLineClamp,
    },
  );

  const node = (
    <Typography
      style={{
        ...style,
        WebkitLineClamp: !expand && cssLineClamp ? rows : undefined,
      }}
      className={classes}
      component={component}
      {...restProps}
    >
      {children}
    </Typography>
  );

  return node;
};

export default Base;
