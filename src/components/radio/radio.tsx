/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import classNames from 'classnames';
import React, { ChangeEvent, ChangeEventHandler } from 'react';
import { useRadioContext } from './group';

type RadioProps = {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string | number;
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
}

// 🔰 Radio component
const prefixCls = 'radio';
const Radio: React.FC<RadioProps> = (props) => {
  const group = useRadioContext();

  const {
    style,
    name,
    value,
    checked,
    className,
    children,
    disabled,
  } = props;

  const classes = classNames(
    prefixCls,
    className,
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { onChange } = props;
    if (group && group.onChange) {
      group.onChange?.(e);
    }

    onChange?.(e);
  };

  const getName = () => {
    if (group && group.name) return group.name;
    return name;
  };

  const getChecked = () => {
    if (group && group.defaultValue) return value === group.defaultValue;
    return checked;
  };

  const node = (
    <label
      style={style}
      className={classes}
    >
      <input
        disabled={disabled}
        checked={checked}
        defaultChecked={getChecked()}
        name={getName()}
        onChange={handleChange}
        type="radio"
        value={value}
      />
      {children !== undefined ? <span>{children}</span> : null}
    </label>
  );

  return node;
};

export default Radio;
