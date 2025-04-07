import { ButtonHTMLAttributes, FC } from 'react';
import styles from './styles.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
