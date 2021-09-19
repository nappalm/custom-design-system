/* eslint-disable radix */
import React from 'react';
import ClearableInput from './clearableInput';
import { InputProps } from './input';

type externalProps = Omit<InputProps, 'value' | 'defaultValue'>;

type InternalNumberProps = {
  max?: number;
  min?: number;
  defaultValue?: number;
  value?: number;
} & externalProps;

const prefixCls = 'input input-number';
const Number: React.FC<InternalNumberProps> = (props) => {
  const {
    className,
    min,
    max,
    defaultValue,
    value,
    disabled,
    placeholder,
    ...restProps
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = props;
    if (onChange) {
      onChange?.(e);
    }
  };

  const handleEnforceMinMax = (
    e: React.ChangeEvent<HTMLInputElement>
    & React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.target.value !== '') {
      if (parseInt(e.target.value) < parseInt(e.target.min)) {
        e.target.value = e.target.min;
      }
      if (parseInt(e.target.value) > parseInt(e.target.max)) {
        e.target.value = e.target.max;
      }
    }
  };

  const node = (
    <ClearableInput
      prefixCls={prefixCls}
      className={className}
      {...restProps}
    >
      <input
        value={value}
        defaultValue={defaultValue || min}
        onChange={handleChange}
        type="number"
        onKeyUp={handleEnforceMinMax}
        disabled={disabled}
        placeholder={placeholder}
        max={max}
        min={min}
      />
    </ClearableInput>
  );

  return node;
};

export default Number;
