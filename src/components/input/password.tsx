import React from 'react';
import ClearableInput from './clearableInput';
import { InputProps } from './input';

const prefixCls = 'input input-password';
const Number: React.FC<InputProps> = (props) => {
  const {
    className,
    defaultValue,
    value,
    placeholder,
    disabled,
    ...restProps
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = props;
    if (onChange) {
      onChange?.(e);
    }
  };

  const node = (
    <ClearableInput
      prefixCls={prefixCls}
      className={className}
      {...restProps}
    >
      <input
        type="password"
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
      />
    </ClearableInput>
  );

  return node;
};

export default Number;
