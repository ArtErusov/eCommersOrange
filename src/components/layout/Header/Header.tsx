import { FC, useState } from 'react';

import mainLogo from '@/assets/images/svg/mainLogo.svg';
import catalogIcon from '@/assets/images/svg/catalogIcon.svg';
import favoritesIcon from '@/assets/images/svg/favoritesIcon.svg';
import cartIcon from '@/assets/images/svg/cartIcon.svg';
import profileIcon from '@/assets/images/svg/profileIcon.svg';

import SearchBlock from './SearchBlock';
import Modal from '@/components/ui/Modal/Modal';
import Registration from '@/pages/Registration/Registration';
import CitySelector from './CitySelector';
import { Link } from 'react-router-dom';

import styles from './Header.module.css';

const Header: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  return (
    <header>
      <div className={styles['header__top-bar']}>
        <div className={`container ${styles['header__top-content']}`}>
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
            <div className={`${styles['header__catalog']} ${styles['header__catalog--hover']}`}>
              <div className={styles['header__catalog-button']}>
                <img src={catalogIcon} alt="Каталог" className={styles['header__catalog-icon']} />
                <span className={styles['header__catalog-text']}>Каталог</span>
              </div>
            </div>
          </div>

          <SearchBlock />

          <div className={styles['header__actions']}>
            <button
              onClick={() => setModalIsOpen(!modalIsOpen)}
              className={styles['header__action']}
            >
              <img className="w-[26px] h-[26px]" src={profileIcon} alt="Избранные" />
              <p>войти</p>
            </button>

            <button className={styles['header__action']}>
              <img className="w-[26px] h-[26px]" src={favoritesIcon} alt="Избранные" />
              <p>избранные</p>
            </button>
            <button className={styles['header__action']}>
              <img className="w-[26px] h-[26px]" src={cartIcon} alt="Корзина" />
              <p>корзина</p>
            </button>
          </div>
        </div>
      </div>
      {modalIsOpen && (
        <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
          <Registration />
        </Modal>
      )}
    </header>
  );
};
export default Header;
