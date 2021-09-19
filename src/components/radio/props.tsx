export type RadioChangeEventTarget = {
  checked?: boolean;
}

export type RadioChangeEvent = {
  target: RadioChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: MouseEvent;
}
