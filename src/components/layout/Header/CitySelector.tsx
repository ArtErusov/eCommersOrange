import { FC, useState } from 'react';
import { useLocalStorage } from '../../../helpers/hooks/useLocalStorage';
import '../../../assets/css/main.css';

import closeList from '../../../assets/images/svg/closeList.svg';
import openList from '../../../assets/images/svg/openList.svg';

import { CITIES } from '../../../constants/cities';

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
    <div onMouseLeave={() => setIsActive(false)} className="flex mt-px relative">
      <p className="text-[var(--white)] whitespace-nowrap">Город : </p>
      <button
        className="mx-[10px] text-[var(--white)] whitespace-nowrap cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        {selectedCity}
      </button>
      <button
        onClick={() => setIsActive(!isActive)}
        className="w-[14px] h-[14px] mt-[5px] cursor-pointer"
      >
        <img
          src={isActive ? closeList : openList}
          alt={isActive ? 'Закрыть выбор города' : 'Открыть выбор города'}
        />
      </button>

      {isActive && (
        <ul className="dropdownList">
          {CITIES.filter((city) => city !== selectedCity).map((city) => {
            return (
              <li
                key={city}
                className="py-[2px] px-[10px] cursor-pointer hover:bg-[var(--gray)] first:hover:rounded-t-[10px] last:hover:rounded-b-[10px]"
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
