import { FC, useState } from 'react';
import { useLocalStorage } from '../../../helpers/hooks/useLocalStorage';

import styles from './styles.module.css';

import closeList from '../../../assets/images/svg/closeList.svg';
import openList from '../../../assets/images/svg/openList.svg';
import mainLogo from '../../../assets/images/svg/mainLogo.svg';
import catalogIcon from '../../../assets/images/svg/catalogIcon.svg';
import favoritesIcon from '../../../assets/images/svg/favoritesIcon.svg';
import cartIcon from '../../../assets/images/svg/cartIcon.svg';

import SearchBlock from './Components/SearchBlock/SearchBlock';

const Header: FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const [selectedCity, setSelectedCity] = useLocalStorage<string>(
    'selectedCity',
    'Санкт-Петербург',
  );

  const handleSelectedCity = (item: string) => {
    setSelectedCity(item);
    setIsActive(false);
  };

  const cities: string[] = [
    'Москва',
    'Тула',
    'Краснодар',
    'Санкт-Петербург',
    'Екатеринбург',
    'Новосибирск',
    'Казань',
    'Нижний Новгород',
    'Ростов-на-Дону',
    'Владивосток',
  ];

  return (
    <header>
      <div className={styles.fillСolor}>
        <div className={`${styles.container} ${styles.flex}`}>
          <div onMouseLeave={() => setIsActive(false)} className={styles.citySelector}>
            <p className={styles.label}>Город : </p>
            <button className={styles.selectedCity} onClick={() => setIsActive(!isActive)}>
              {selectedCity}
            </button>
            {isActive ? (
              <img src={closeList} alt="Закрыть выбор города" />
            ) : (
              <img src={openList} alt="Открыть выбор города" />
            )}
            {isActive && (
              <ul className={styles.dropdownList}>
                {cities
                  .filter((city) => city !== selectedCity)
                  .map((city, index) => (
                    <li key={index} onClick={() => handleSelectedCity(city)}>
                      {city}
                    </li>
                  ))}
              </ul>
            )}
          </div>

          <p className={styles.portfolio}>Портфолио</p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.leftBlock}>
            <img src={mainLogo} alt="" />
            <div className={styles.catalog_wrapper}>
              <div className={styles.catalog_btn}>
                <img src={catalogIcon} alt="Каталог" className={styles.catalog_icon} />
                <span className={styles.catalog_label}>Каталог</span>
              </div>
            </div>
          </div>
          <SearchBlock />
          <div className={styles.rightBlock}>
            <div className={styles.rightBlock_item}>
              <img src={favoritesIcon} alt="Избранные" />
              <p>Избранные</p>
            </div>
            <div className={styles.rightBlock_item}>
              <img src={cartIcon} alt="Корзина" />
              <p>Корзина</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
