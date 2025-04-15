import { FC, FormEvent, useState } from 'react';
import styles from './styles.module.css';
import searchIcon from '../../../assets/images/svg/Search.svg';
import SearchBlock from './Components/SearchBlock/SearchBlock';

const Header: FC = () => {
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

  const [dataSearch, setDataSearch] = useState<string>('');

  const handlerSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Форма отправлена', dataSearch);
    setDataSearch('');
  };

  return (
    <header>
      <div className={styles.top_header}>
        <div className={`${styles.container} ${styles.flex}`}>
          <div>Город: {cities[1]}</div>
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

// FC (FunctionComponent) — это встроенный тип в React, который описывает функциональный компонент.
// Он автоматически добавляет типизацию для props (хотя в данном случае пропсы не используются) и возвращаемого значения (JSX).

// const Header: FC = () => {...} явно указывает, что Header — это функциональный компонент.
