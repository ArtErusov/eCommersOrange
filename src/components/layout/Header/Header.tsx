import { FC } from 'react';
import styles from './styles.module.css';
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
        <div className={styles.temporary_filling}>Тут будет поиск</div>
        <div className={styles.temporary_filling}>Тут будет корзина</div>
      </div>
    </header>
  );
};
export default Header;

// FC (FunctionComponent) — это встроенный тип в React, который описывает функциональный компонент.
// Он автоматически добавляет типизацию для props (хотя в данном случае пропсы не используются) и возвращаемого значения (JSX).

// const Header: FC = () => {...} явно указывает, что Header — это функциональный компонент.
