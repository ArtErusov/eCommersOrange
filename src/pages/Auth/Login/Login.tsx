import { FC } from 'react';
import styles from './Login.module.css';
import Button from '@/components/ui/Button/Button';
import { Link } from 'react-router-dom';

const Login: FC = () => {
  return (
    <div className={styles.reg}>
      <p className={styles.reg_title}>Вход</p>
      <input className={styles.reg_input_text} type="text" placeholder="Email" />
      <input className={styles.reg_input_pas} type="password" placeholder="Пароль" />
      <Button>войти</Button>
      <p className={styles.reg_text}>Нет аккаунта?</p>
      <Link className={styles.reg_link} to="/auth/reg">
        Зарегестрироваться
      </Link>
    </div>
  );
};
export default Login;
