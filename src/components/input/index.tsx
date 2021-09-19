import Origin from './input';
import Number from './number';
import TextArea from './textArea';
import Password from './password';

export type InputProps = typeof Origin & {
  Number: typeof Number;
  TextArea: typeof TextArea;
  Password: typeof Password;
}

const Input = Origin as InputProps;
Input.Number = Number;
Input.TextArea = TextArea;
Input.Password = Password;

export default Input;
