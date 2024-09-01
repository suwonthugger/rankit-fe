import { InputHTMLAttributes } from 'react';
import SearchIcon from '@/shared/assets/svg/search.svg';
import { inputVariant, inputContainerStyle, inputStyle } from './input.css';

interface InputProps extends InputHTMLAttributes<HTMLElement> {
  variant?: 'search' | 'default';
}

const Input = ({ variant = 'default', ...props }: InputProps) => {
  return (
    <div className={`${inputContainerStyle} ${inputVariant[variant]}`}>
      {variant === 'search' && <SearchIcon />}
      <input {...props} className={inputStyle} />
    </div>
  );
};

export default Input;
