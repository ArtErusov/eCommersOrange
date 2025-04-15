import { FC, FormEvent, useEffect, useState } from 'react';
import { Product } from '../../../../../types/product';
import { useDebounce } from '../../../../../helpers/hooks/UseDebounce';

import styles from './styles.module.css';
import loading from '../../../../../assets/images/svg/Loading.svg';
import notFound from '../../../../../assets/images/svg/NotFound.svg';

import searchIcon from '../../../../../assets/images/svg/Search.svg';
import temporaryItem from './temporaryData.json';
import SearchCard from '../../../../ui/SearchCard/SearchCard';

const SearchBlock: FC = () => {
  const [dataSearch, setDataSearch] = useState<string>('');
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [items, setItems] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [itemsNotFound, setItemsNotFound] = useState<boolean>(false);

  const debauncedDataSearch = useDebounce(dataSearch, 1500);

  useEffect(() => {
    if (dataSearch === '') {
      return;
    }
    setIsLoading(false);
    fetch(`https://65523e2c5c69a7790329c0eb.mockapi.io/Orange?dataSearch=${dataSearch}`)
      .then((res) => res.json())
      .then((json: Product[] | 'Not found') => {
        if (json === 'Not found') {
          setIsInputFocused(false);
          setItemsNotFound(true);
          setIsLoading(true);
          setDataSearch('');

          setTimeout(() => {
            setItemsNotFound(false);
          }, 3000);
          return;
        }
        setItems(json);
        setIsLoading(true);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных:', error);
      });
  }, [debauncedDataSearch]);

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

      {(isInputFocused || itemsNotFound) && <div className={styles.overlay} />}
      {itemsNotFound && (
        <div className={styles.search_loading}>
          <img src={notFound} alt="" />
          <p>Ничего не найдено....</p>
        </div>
      )}
      {isInputFocused &&
        (isLoading ? (
          <ul className={styles.search_results}>
            {items.length === 0
              ? temporaryItem.map((item) => <SearchCard item={item} />)
              : items.map((item) => <SearchCard item={item} />)}
          </ul>
        ) : (
          <div className={styles.search_loading}>
            <img src={loading} alt="" />
          </div>
        ))}
    </div>
  );
};
export default SearchBlock;
