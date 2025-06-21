import { FC, useEffect, useState } from 'react';
import styles from './PromoBlock.module.css';
import { Link } from 'react-router-dom';

const PromoBlock: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

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
      setEmail('');
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

  return (
    <>
      <div className={styles['promo-block']}>
        <div className={styles['promo-block__content']}>
          <h3 className={styles['promo-block__title']}>Подпишитесь на важные новости.</h3>
          <form onSubmit={handleMail} className={styles['promo-block__form']}>
            <input
              value={email}
              placeholder="введите e-mail"
              type="text"
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
          <div className={styles['promo-block__hide']}>Не показывать больше.</div>
        </div>
      </div>
    </>
  );
};

export default PromoBlock;
