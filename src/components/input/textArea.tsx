import React from 'react';
import ClearableInput from './clearableInput';
import { InputProps } from './input';

type InternalNumberProps = {
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  maxLength?: number;
  rows?: number;
} & InputProps & Omit<InputProps, 'onChange'>;

const prefixCls = 'input input-text-area';
const Number: React.FC<InternalNumberProps> = (props) => {
  const {
    className,
    maxLength,
    defaultValue,
    value,
    rows = 3,
    placeholder,
    disabled,
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { onChange } = props;
    if (onChange) {
      onChange?.(e);
    }
  };

  const node = (
    <ClearableInput
      prefixCls={prefixCls}
      className={className}
    >
      <textarea
        rows={rows}
        value={value}
        maxLength={maxLength}
        defaultValue={defaultValue}
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
      />
    </ClearableInput>
  );

  return node;
};

export default Number;
