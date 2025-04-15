import { FC, FormEvent, useState } from 'react';
import styles from './styles.module.css';
import searchIcon from '../../../../../assets/images/svg/Search.svg';

const SearchBlock: FC = () => {
  const [dataSearch, setDataSearch] = useState<string>('');

  const handlerSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Форма отправлена', dataSearch);
    setDataSearch('');
  };

  return (
    <form className={styles.search} onSubmit={handlerSearch}>
      <input
        className={styles.search_input}
        type="text"
        value={dataSearch}
        onChange={(e) => setDataSearch(e.target.value)}
        placeholder="Начните поиск..."
      />
      <button className={styles.search_btn} type="submit">
        <img src={searchIcon} alt="" />
      </button>
    </form>
  );
};
export default SearchBlock;
