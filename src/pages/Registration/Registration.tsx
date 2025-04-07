import { FC } from 'react';
import styles from './styles.module.css';
import Button from '../../components/ui/Button/Button';

const Registration: FC = () => {
  return (
    <div className={styles.reg}>
      <p className={styles.reg_title}>Вход или регистрация</p>
      <input className={styles.reg_input_text} type="text" placeholder="Email" />
      <input className={styles.reg_input_pas} type="password" placeholder="Пароль" />
      <Button>войти</Button>
      <p className={styles.reg_text}>Нет аккаунта?</p>
      <a className={styles.reg_link} href="/">
        Зарегестрироваться
      </a>
    </div>
  );
};
export default Registration;
