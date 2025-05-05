import { FC, useState } from 'react';
import { useLocalStorage } from '../../../helpers/hooks/useLocalStorage';

import styles from './styles.module.css';

import closeList from '../../../assets/images/svg/closeList.svg';
import openList from '../../../assets/images/svg/openList.svg';
import mainLogo from '../../../assets/images/svg/mainLogo.svg';
import catalogIcon from '../../../assets/images/svg/catalogIcon.svg';
import favoritesIcon from '../../../assets/images/svg/favoritesIcon.svg';
import cartIcon from '../../../assets/images/svg/cartIcon.svg';
import profileIcon from '../../../assets/images/svg/profileIcon.svg';

import SearchBlock from './Components/SearchBlock/SearchBlock';
import Modal from '../../ui/Modal/Modal';
import Registration from '../../../pages/Registration/Registration';

const Header: FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
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
      <div className="bg-[var(--dark-gray)] w-full h-[24px]">
        <div className="container flex justify-between">
          <div onMouseLeave={() => setIsActive(false)} className="flex mt-px relative">
            <p className="text-[var(--white)] whitespace-nowrap">Город : </p>
            <button
              className="mx-[10px] text-[var(--white)] whitespace-nowrap cursor-pointer"
              onClick={() => setIsActive(!isActive)}
            >
              {selectedCity}
            </button>
            {isActive ? (
              <img
                className="w-[14px] h-[14px] mt-[5px] cursor-pointer"
                src={closeList}
                onClick={() => setIsActive(!isActive)}
                alt="Закрыть выбор города"
              />
            ) : (
              <img
                onClick={() => setIsActive(!isActive)}
                className="w-[14px] h-[14px] mt-[5px] cursor-pointer"
                src={openList}
                alt="Открыть выбор города"
              />
            )}
            {isActive && (
              <ul className="dropdownList">
                {cities
                  .filter((city) => city !== selectedCity)
                  .map((city, index, array) => {
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

          <p className="text-[var(--white)] mt-px">Портфолио</p>
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
            <div onClick={() => setModalIsOpen(!modalIsOpen)} className={styles.rightBlock_item}>
              <img src={profileIcon} alt="Избранные" />
              <p>войти</p>
            </div>

            <div className={styles.rightBlock_item}>
              <img src={favoritesIcon} alt="Избранные" />
              <p>избранные</p>
            </div>
            <div className={styles.rightBlock_item}>
              <img src={cartIcon} alt="Корзина" />
              <p>корзина</p>
            </div>
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
