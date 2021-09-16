import classNames from 'classnames';
import React from 'react';
import { GridProps } from './grid';

type positionConfig = 'start' | 'end' | 'center' | 'space-between' | 'space-around';

type Gap = number;

interface InternalRowProps extends GridProps {
  gap?: Gap | [Gap, Gap];
  justifyContent?: positionConfig;
  align?: positionConfig;
}

// 🔰 Row component
const prefixCls = 'row';
const Row: React.FC<InternalRowProps> = (props) => {
  const {
    className,
    style,
    children,
    gap = 0,
  } = props;

  const classes = classNames(
    prefixCls,
    className,
  );

  const getGap = (): [number, number] => {
    const gapValues: [number, number] = [0, 0];
    const normalizeGap = Array.isArray(gap) ? gap : [gap, 0];

    normalizeGap.forEach((gp, index) => {
      gapValues[index] = gp || 0;
    });

    return gapValues;
  };

  const gaps = getGap();

  // 👉 Pass to column component
  const gapColumn = gaps[0] > 0 ? gaps[0] / 2 : undefined;

  // 👉 Vertical and horizontal gaps
  const gapHorizontal = gaps[0] > 0 ? gaps[0] / -2 : undefined;
  const gapVertical = gaps[1] > 0 ? gaps[1] : undefined;

  const node = (
    <div
      className={classes}
      style={{
        ...style,
        marginLeft: `${gapHorizontal}px`,
        marginRight: `${gapHorizontal}px`,
        rowGap: gapVertical,
      }}
    >
      { React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { cssGap: gapColumn });
        }
        return child;
      })}
    </div>
  );

  return node;
};

export default Row;
