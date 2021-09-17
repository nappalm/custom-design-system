import React from 'react';

export interface GridProps {
  className?: string;
  style?: React.CSSProperties;
}

const Grid: React.FC<GridProps> = (props) => {
  const {
    children,
    className,
    style,
  } = props;

  const node = (
    <div
      className={className}
      style={style}
    >
      {children}
    </div>
  );

  return node;
};

export default Grid;
