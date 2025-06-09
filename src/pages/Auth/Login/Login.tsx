import { FC, FormEvent } from 'react';
import styles from './Login.module.css';
import Button from '@/components/ui/Button/Button';
import { Link } from 'react-router-dom';

export type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};

const Login: FC = () => {
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;
    console.log(email.value);
    console.log(password.value);
  };

  return (
    <div className={styles['login-form']}>
      <p className={styles['login-form__title']}>Вход</p>
      <form onSubmit={submit} className={styles['login-form__form']}>
        <input
          name="email"
          className={styles['login-form__input']}
          type="text"
          placeholder="Email"
        />
        <input
          name="password"
          className={styles['login-form__input']}
          type="password"
          placeholder="Пароль"
        />
        <Button type="submit">войти</Button>
      </form>
      <p className={styles['login-form__text']}>Нет аккаунта?</p>
      <Link className={styles['login-form__link']} to="/auth/reg">
        Зарегистрироваться
      </Link>
    </div>
  );
};

export default Login;
