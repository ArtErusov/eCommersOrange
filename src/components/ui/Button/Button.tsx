import { FC } from 'react';
import styles from './styles.module.css';

interface ButtonProps {
  children: string;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button;
