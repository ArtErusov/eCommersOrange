import { FC, useState } from 'react';
import { useLocalStorage } from '../../../shared/helpers/hooks/useLocalStorage';

import closeList from '@/assets/images/svg/closeList.svg';
import openList from '@/assets/images/svg/openList.svg';
import styles from './Header.module.css';

import { CITIES } from '@/shared/constants/cities';

const CitySelector: FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const [selectedCity, setSelectedCity] = useLocalStorage<string>(
    'selectedCity',
    'Санкт-Петербург',
  );

  const handleSelectedCity = (cityName: string) => {
    setSelectedCity(cityName);
    setIsActive(false);
  };

  return (
    <div onMouseLeave={() => setIsActive(false)} className={styles['city-selector']}>
      <p className={styles['city-selector__label']}>Город : </p>
      <button className={styles['city-selector__button']} onClick={() => setIsActive(!isActive)}>
        {selectedCity}
      </button>
      <button
        onClick={() => setIsActive(!isActive)}
        className={styles['city-selector__icon-button']}
      >
        <img
          src={isActive ? closeList : openList}
          alt={isActive ? 'Закрыть выбор города' : 'Открыть выбор города'}
        />
      </button>

      {isActive && (
        <ul className={styles['city-selector__dropdown']}>
          {CITIES.filter((city) => city !== selectedCity).map((city) => {
            return (
              <li
                key={city}
                className={styles['city-selector__item']}
                onClick={() => handleSelectedCity(city)}
              >
                {city}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default CitySelector;
