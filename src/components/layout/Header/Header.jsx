import styles from './styles.module.css';
function Header() {
  const cities = [
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
}
export default Header;
