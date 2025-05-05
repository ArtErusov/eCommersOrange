import { FC, useState } from 'react';
import '../../../assets/css/main.css';

import mainLogo from '../../../assets/images/svg/mainLogo.svg';
import catalogIcon from '../../../assets/images/svg/catalogIcon.svg';
import favoritesIcon from '../../../assets/images/svg/favoritesIcon.svg';
import cartIcon from '../../../assets/images/svg/cartIcon.svg';
import profileIcon from '../../../assets/images/svg/profileIcon.svg';

import SearchBlock from './Components/SearchBlock/SearchBlock';
import Modal from '../../ui/Modal/Modal';
import Registration from '../../../pages/Registration/Registration';
import CitySelector from './CitySelector';

const Header: FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  return (
    <header>
      <div className="bg-[var(--dark-gray)] w-full h-[24px]">
        <div className="container flex justify-between">
          <CitySelector />
          <p className="text-[var(--white)] mt-px">Портфолио</p>
        </div>
      </div>

      <div className="container">
        <div className="flex justify-between mt-[15px]">
          <div className="flex gap-[28px]">
            <img src={mainLogo} alt="Логотип компании" role="img" />

            <div className="relative w-[52px] h-[52px] flex-shrink-0 group">
              <div
                className="cursor-pointer absolute top-0 left-0 h-[52px] w-[52px] bg-[var(--orange)] rounded-[10px] text-[var(--white)] 
                   flex items-center justify-start overflow-hidden transition-[width] duration-300 ease-in-out 
                   z-[8] whitespace-nowrap px-[10px] gap-[10px] group-hover:w-[160px]"
              >
                <img src={catalogIcon} alt="Каталог" className="w-[24px] h-[24px] flex-shrink-0" />
                <span
                  className="opacity-0 text-[var(--white)] text-[20px] font-semibold translate-x-[-10px]
                     transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0"
                >
                  Каталог
                </span>
              </div>
            </div>
          </div>

          <SearchBlock />

          <div className="flex mt-[7px] gap-[24px]">
            <button
              onClick={() => setModalIsOpen(!modalIsOpen)}
              className="flex flex-col items-center cursor-pointer"
            >
              <img className="w-[26px] h-[26px]" src={profileIcon} alt="Избранные" />
              <p>войти</p>
            </button>

            <button className="flex flex-col items-center cursor-pointer">
              <img className="w-[26px] h-[26px]" src={favoritesIcon} alt="Избранные" />
              <p>избранные</p>
            </button>
            <button className="flex flex-col items-center cursor-pointer">
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
