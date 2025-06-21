import { FC, useEffect, useState } from 'react';
import styles from './PromoBlock.module.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/shared/store/store';
import { userActions } from '@/shared/store/user.slice';

const PromoBlock: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  // const [success, setSuccess] = useState<boolean>(false);

  const dispatch = useDispatch();
  const showPromo = useSelector((state: RootState) => state.user.showPromoBlock);

  const handleHide = () => {
    dispatch(userActions.hidePromoBlock());
  };

  const handleMail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === '') {
      setError(true);
      setEmail('Введите email адрес');
      return;
    } else if (!email.includes('@')) {
      setError(true);
      setEmail('Введите корректный email адрес');
      return;
    } else {
      console.log('Email отправлен:', email);
      // setSuccess(true);
      dispatch(userActions.hidePromoBlock());
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(false);
        setEmail('');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  if (!showPromo) return null;

  return (
    <>
      <div className={styles['promo-block']}>
        <div className={styles['promo-block__content']}>
          <h3 className={styles['promo-block__title']}>Подпишитесь на важные новости.</h3>
          <form onSubmit={handleMail} className={styles['promo-block__form']}>
            <input
              value={email}
              placeholder="введите e-mail"
              type="email"
              onChange={handleInputChange}
              className={styles[error ? 'promo-block__input--error' : 'promo-block__input']}
            />
            <button
              type="submit"
              className={styles[error ? 'promo-block__button--error' : 'promo-block__button']}
            >
              подписаться
            </button>
          </form>
          <div className={styles['promo-block__terms']}>
            <p className={styles['promo-block__terms-text']}>
              Нажимая подписаться вы соглашаетесь с
            </p>
            <Link className={styles['promo-block__terms-link']} to="/">
              Условиями использования сайта.
            </Link>
          </div>
          <div onClick={handleHide} className={styles['promo-block__hide']}>
            Не показывать больше.
          </div>
        </div>
      </div>
    </>
  );
};

export default PromoBlock;
