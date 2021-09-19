import React, { createContext, useContext, useMemo } from 'react';

// 🔰 Hook
export const useRadioContext = () => {
  const context = useContext(RadioGroupCtx);
  if (!context) {
    return false;
  }

  return context;
};

// 🔰 Radio context group
export const RadioGroupCtx = createContext<GroupProps | null>(null);

interface GroupProps {
  name?: string;
  defaultValue?: string | number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

// 🔰 Context component
const Group: React.FC<GroupProps> = (props) => {
  const {
    name,
    defaultValue,
    onChange,
    children,
  } = props;

  const value = useMemo(() => ({
    name,
    defaultValue,
    onChange,
  }), [name, defaultValue, onChange]);

  const node = (
    <RadioGroupCtx.Provider value={value}>
      {children}
    </RadioGroupCtx.Provider>
  );

  return node;
};

export default Group;
