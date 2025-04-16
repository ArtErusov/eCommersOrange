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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [itemsNotFound, setItemsNotFound] = useState<boolean>(false);

  const debouncedDataSearch = useDebounce(dataSearch, 1500);

  useEffect(() => {
    if (dataSearch === '') {
      return;
    }
    setIsLoading(true);
    fetch(`https://65523e2c5c69a7790329c0eb.mockapi.io/Orange?dataSearch=${dataSearch}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Server error');
        }
        return res.json();
      })
      .then((json: Product[] | 'Not found') => {
        if (json === 'Not found') {
          setIsInputFocused(false);
          setItemsNotFound(true);
          setIsLoading(false);
          setDataSearch('');

          setTimeout(() => {
            setItemsNotFound(false);
          }, 3000);
          return;
        }
        setItems(json);
        setIsLoading(false);
        setItemsNotFound(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error('Ошибка при загрузке данных в компоненте SearchBlock :', error);
      });
  }, [debouncedDataSearch]);

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
    <>
      {(isInputFocused || itemsNotFound) && <div className={styles.overlay} />}
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
            <img src={searchIcon} alt="Кнопка поиска" />
          </button>
        </form>

        {itemsNotFound && (
          <div className={styles.error_message}>
            <img src={notFound} alt="Ничего не найдено" />
            <p>Ничего не найдено....</p>
          </div>
        )}
        {isInputFocused &&
          (isLoading ? (
            <div className={styles.search_loading}>
              <img src={loading} alt="Идет загрузка" />
            </div>
          ) : (
            <ul className={styles.search_results}>
              {items.length === 0
                ? temporaryItem.map((item) => <SearchCard key={item.id} item={item} />)
                : items.map((item) => <SearchCard key={item.id} item={item} />)}
            </ul>
          ))}
      </div>
    </>
  );
};
export default SearchBlock;
