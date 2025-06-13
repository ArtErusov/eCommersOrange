import { FC } from 'react';

import mainLogo from '@/assets/images/svg/mainLogo.svg';
import catalogIcon from '@/assets/images/svg/catalogIcon.svg';
import favoritesIcon from '@/assets/images/svg/favoritesIcon.svg';
import cartIcon from '@/assets/images/svg/cartIcon.svg';
import profileIcon from '@/assets/images/svg/profileIcon.svg';

import SearchBlock from './SearchBlock';
import CitySelector from './CitySelector';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import { HeaderButton } from '@/shared/types/HeaderButton';

const Header: FC = () => {
  const headerButton: HeaderButton[] = [
    {
      title: 'войти',
      icon: profileIcon,
      path: '/auth/login',
    },
    {
      title: 'избранные',
      icon: favoritesIcon,
      path: '/cart',
    },
    {
      title: 'корзина',
      icon: cartIcon,
      path: '/cart',
    },
  ];

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
            {headerButton.map((btn) => (
              <Link to={btn.path} key={btn.title} className={styles['header__action']}>
                <img src={btn.icon} alt={btn.title} />
                <p>{btn.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
