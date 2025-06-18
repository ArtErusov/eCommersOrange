import { FC } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({ children, onClick, width, ...props }) => {
  const style = width ? { width: `${width}px` } : { padding: `10px 24px` };

  return (
    <button style={style} onClick={onClick} className={styles['button']} {...props}>
      {children}
    </button>
  );
};

export default Button;
