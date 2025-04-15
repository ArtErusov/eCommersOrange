import { FC, FormEvent, useEffect, useState } from 'react';
import styles from './styles.module.css';
import searchIcon from '../../../../../assets/images/svg/Search.svg';
import { Product } from '../../../../../types/product';
import temporaryItem from './temporaryData.json';

const SearchBlock: FC = () => {
  const [dataSearch, setDataSearch] = useState<string>('');
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    if (!dataSearch) {
      return;
    }

    fetch(`https://65523e2c5c69a7790329c0eb.mockapi.io/Orange?dataSearch=${dataSearch}`)
      .then((res) => res.json())
      .then((json: Product[]) => {
        setItems(json);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, [dataSearch]);

  const handlerSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDataSearch('');
  };

  const handlerBlur = () => {
    setIsInputFocused(false);
    setItems([]);
    setDataSearch('');
  };

  return (
    <div className={styles.search_container}>
      <form onSubmit={handlerSearch}>
        <input
          className={styles.search_input}
          type="text"
          value={dataSearch}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => handlerBlur()}
          onChange={(e) => setDataSearch(e.target.value)}
          placeholder="Начните поиск..."
        />
        <button className={styles.search_btn} type="submit">
          <img src={searchIcon} alt="" />
        </button>
      </form>

      {isInputFocused && (
        <ul className={styles.search_results}>
          {items.length === 0
            ? temporaryItem.map((item) => (
                <li className={styles.search_results_item} key={item.id}>
                  <img className={styles.search_results_img} src={item.src[0]} alt="" />
                  {item.text}
                </li>
              ))
            : items.map((item) => (
                <li className={styles.search_results_item} key={item.id}>
                  <img className={styles.search_results_img} src={item.src[0]} alt="" />
                  {item.text}
                </li>
              ))}
        </ul>
      )}
    </div>
  );
};
export default SearchBlock;
