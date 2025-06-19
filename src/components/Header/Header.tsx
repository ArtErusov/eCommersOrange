import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import mainLogo from '@/assets/images/svg/mainLogo.svg';
import catalogIcon from '@/assets/images/svg/catalogIcon.svg';
import favoritesIcon from '@/assets/images/svg/favoritesIcon.svg';
import cartIcon from '@/assets/images/svg/cartIcon.svg';
import profileIcon from '@/assets/images/svg/profileIcon.svg';

import SearchBlock from './SearchBlock';
import CitySelector from './CitySelector';

import styles from './Header.module.css';
import { RootState } from '@/shared/store/store';

const Header: FC = () => {
  const login = useSelector((state: RootState) => state.user.jwt);
  console.log(login, 'Проверка логина');
  return (
    <header>
      <div className={styles['header__top-bar']}>
        <div className={`${styles['container']} ${styles['header__top-content']}`}>
          <CitySelector />
          <div className={styles['header__links']}>
            <Link to="/promo">promo</Link>
            <a href="https://github.com/ArtErusov" target="_blank" rel="noopener noreferrer">
              Портфолио
            </a>
          </div>
        </div>
      </div>

      <div className={styles['container']}>
        <div className={styles['header__main']}>
          <div className={styles['header__left']}>
            <Link className={styles['header__logo']} to="/">
              <img src={mainLogo} alt="Логотип компании" role="img" />
            </Link>
            <Link
              to={'/catalog'}
              className={`${styles['header__catalog']} ${styles['header__catalog--hover']}`}
            >
              <div className={styles['header__catalog-button']}>
                <img src={catalogIcon} alt="Каталог" className={styles['header__catalog-icon']} />
                <span className={styles['header__catalog-text']}>Каталог</span>
              </div>
            </Link>
          </div>

          <SearchBlock />

          <div className={styles['header__actions']}>
            <Link to="/auth/login" className={styles['header__action']}>
              <img src={profileIcon} alt="войти" />
              <p>{login ? 'Профиль' : 'Войти'}</p>
            </Link>
            <Link to="/cart" className={styles['header__action']}>
              <img src={favoritesIcon} alt="избранные" />
              <p>избранные</p>
            </Link>
            <Link to="/cart" className={styles['header__action']}>
              <img src={cartIcon} alt="корзина" />
              <p>корзина</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
