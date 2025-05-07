import { ButtonHTMLAttributes, FC } from 'react';
import '../../../assets/css/main.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
}

const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-[24px] py-[10px] bg-[var(--orange)] cursor-pointer text-[var(--white)] rounded-[10px] transition-colors duration-300 ease-in-out hover:bg-[var(--dark-gray)]"
    >
      {children}
    </button>
  );
};

export default Button;
