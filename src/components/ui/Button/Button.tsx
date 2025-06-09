import { FC } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ children, onClick, ...props }) => {
  return (
    <button onClick={onClick} className={styles['button']} {...props}>
      {children}
    </button>
  );
};

export default Button;
