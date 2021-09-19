import React from 'react';
import ClearableInput from './clearableInput';

export interface InputProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  bordered?: boolean;
  disabled?: boolean;
  type?:
    'number'
    | 'text'
    | 'email'
    | 'file'
    | 'password'
    | 'submit';
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  size?:
    'small'
    | 'medium'
    | 'large';
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onPressEnter?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  value?: string;
  defaultValue?: string;
}

// 🔰 Input component
const prefixCls = 'input';
const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    value,
    defaultValue,
    placeholder,
    style,
    prefix,
    suffix,
    size = 'medium',
    type = 'text',
    disabled,
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    const { onChange } = props;

    if (onChange) {
      onChange?.(e);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (disabled) return;
    const { onPressEnter, onKeyDown } = props;

    if (onPressEnter && e.key === 'Enter') {
      onPressEnter?.(e);
    }

    onKeyDown?.(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const { onFocus } = props;
    // 👉 Se necesita un estado para activar el foco.
    // setState({focused: false});
    onFocus?.(e);
  };

  const node = (
    <ClearableInput
      prefixCls={prefixCls}
      prefix={prefix}
      suffix={suffix}
      className={className}
      style={style}
      size={size}
    >
      <input
        type={type}
        onFocus={handleFocus}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        defaultValue={defaultValue}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
      />
    </ClearableInput>
  );

  return node;
};

export default Input;
