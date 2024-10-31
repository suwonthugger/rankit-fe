import { ButtonHTMLAttributes, ReactElement } from 'react';
import {
  alignCenter,
  buttonStyle,
  colorVariant,
  containerVariant,
  fontVariant,
} from './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
  container?: 'lg' | 'sm';
  font?: 'lg' | 'sm';
  color?: 'primary' | 'secondary';
  Icon?: ReactElement<SVGElement>;
}

const Button = ({
  children,
  container = 'lg',
  font = 'sm',
  color = 'primary',
  Icon,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${buttonStyle} ${containerVariant[container]} ${fontVariant[font]} ${colorVariant[color]}`}>
      {Icon && <div className={alignCenter}>{Icon}</div>}
      {children}
    </button>
  );
};

export default Button;
