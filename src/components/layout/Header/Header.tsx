import { FC, useState, useEffect } from 'react';
import styles from './styles.module.css';

import closeList from '../../../assets/images/svg/closeList.svg';
import openList from '../../../assets/images/svg/openList.svg';

import SearchBlock from './Components/SearchBlock/SearchBlock';
import { useLocalStorage } from '../../../helpers/hooks/useLocalStorage';

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
      <div className={styles.top_header}>
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
                {cities.map(
                  (item, index) =>
                    item !== selectedCity && (
                      <li onClick={() => handleSelectedCity(item)} key={index}>
                        {item}
                      </li>
                    ),
                )}
              </ul>
            )}
          </div>

          <p>Портфолио</p>
        </div>
      </div>

      <div className={`${styles.container} ${styles.flex}`}>
        <div className={styles.temporary_filling}>Тут будет лого</div>
        <SearchBlock />
        <div className={styles.temporary_filling}>Тут будет корзина</div>
      </div>
    </header>
  );
};
export default Header;
