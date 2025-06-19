import { FC, FormEvent, useEffect } from 'react';
import styles from './Login.module.css';
import Button from '@/components/ui/Button/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispath, RootState } from '@/shared/store/store';
import { login, userActions } from '@/shared/store/user.slice';
import { LoginForm } from './Login.types';

// Нужно сделать Стилизовать ошибку и добавить 2 секунды чтоб она пропала

const Login: FC = () => {
  const location = useLocation();

  // const [error, setError] = useState<string | null>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispath>();
  const { jwt, loginErrorMessage } = useSelector((s: RootState) => s.user);

  const fromPage = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (jwt) {
      navigate(fromPage);
    }
  }, [jwt, navigate]);

  const submit = async (e: FormEvent) => {
    dispatch(userActions.clearLoginError());
    e.preventDefault();
    const target = e.target as typeof e.target & LoginForm;
    const { email, password } = target;
    await sendLogin(email.value, password.value);
  };

  const sendLogin = async (email: string, password: string) => {
    dispatch(login({ email, password }));
  };

  return (
    <div className={styles['login-form']}>
      {loginErrorMessage && <div>{loginErrorMessage}</div>}
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
