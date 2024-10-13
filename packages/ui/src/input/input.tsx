import { InputHTMLAttributes } from 'react';
import SearchLargeIcon from '../svg/search_lg.svg';
import SearchSmallIcon from '../svg/search_sm.svg';
import {
  inputContainerStyle,
  inputStyle,
  inputPaddingDefaultStyle,
  inputPaddingSearchStyle,
} from './input.css';

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  device?: 'desktop' | 'mobile';
  variant?: 'search' | 'default';
}

const Input = ({
  device = 'desktop',
  variant = 'default',
  className,
  ...props
}: InputProps) => {
  const SearchIcon = device === 'desktop' ? SearchLargeIcon : SearchSmallIcon;

  return (
    <div
      className={`${inputContainerStyle[device]} ${variant === 'default' ? inputPaddingDefaultStyle[device] : inputPaddingSearchStyle[device]} ${className}`}>
      {variant === 'search' && <SearchIcon />}
      <input {...props} className={inputStyle} />
    </div>
  );
};

export default Input;
