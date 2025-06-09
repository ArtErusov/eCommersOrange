import { FC } from 'react';
import styles from './styles.module.css';
import Button from '../../../components/ui/Button/Button';
import { Link } from 'react-router-dom';

const Registration: FC = () => {
  return (
    <div className={styles.reg}>
      <p className={styles.reg_title}>Регистрация</p>
      <input className={styles.reg_input_text} type="text" placeholder="Email" />
      <input className={styles.reg_input_pas} type="password" placeholder="Пароль" />
      <Button>войти</Button>
      <p className={styles.reg_text}>Есть аккаунт? </p>
      <Link className={styles.reg_link} to="/auth/login">
        Вход
      </Link>
    </div>
  );
};
export default Registration;
