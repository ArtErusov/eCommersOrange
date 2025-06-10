import { FC, FormEvent, useState } from 'react';
import styles from './Login.module.css';
import Button from '@/components/ui/Button/Button';
import { Link } from 'react-router-dom';
import axios, { AxiosError } from 'axios';

// Нужно сделать Стилизовать ошибку и добавить 2 секунды чтоб она пропала

export type LoginForm = {
  email: {
    value: string;
  };
  password: {
    value: string;
  };
};

const Login: FC = () => {
  const [error, setError] = useState<string | null>();

  const submit = async (e: FormEvent) => {
    setError(null);
    e.preventDefault();
    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;
    await sendLogin(email.value, password.value);
  };

  const sendLogin = async (email: string, password: string) => {
    try {
      const { data } = await axios.post(`https://purpleschool.ru/pizza-api-demo/auth/login`, {
        email,
        password,
      });
      console.log(data);
    } catch (e) {
      if (e instanceof AxiosError) {
        console.log(e);
        setError(e.response?.data.message);
      }
    }
  };

  return (
    <div className={styles['login-form']}>
      {error && <div>{error}</div>}
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
