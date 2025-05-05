import { FC, useState } from 'react';
import { useLocalStorage } from '../../../helpers/hooks/useLocalStorage';
import '../../../assets/css/main.css';

import closeList from '../../../assets/images/svg/closeList.svg';
import openList from '../../../assets/images/svg/openList.svg';

import { CITIES } from '../../../constants/cities';

const SelectedCity: FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const [selectedCity, setSelectedCity] = useLocalStorage<string>(
    'selectedCity',
    'Санкт-Петербург',
  );

  const handleSelectedCity = (item: string) => {
    setSelectedCity(item);
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

      <img
        onClick={() => setIsActive(!isActive)}
        className="w-[14px] h-[14px] mt-[5px] cursor-pointer"
        src={isActive ? closeList : openList}
        alt={isActive ? 'Открыть выбор города' : 'Закрыть выбор города'}
      />

      {isActive && (
        <ul className="dropdownList">
          {CITIES.filter((city) => city !== selectedCity).map((city, index, array) => {
            const isFirst = index === 0;
            const isLast = index === array.length - 1;

            return (
              <li
                key={index}
                className={`py-[2px] px-[10px] cursor-pointer hover:bg-[var(--gray)] ${
                  isFirst ? 'hover:rounded-t-[10px]' : ''
                } ${isLast ? 'hover:rounded-b-[10px]' : ''}`}
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
export default SelectedCity;
