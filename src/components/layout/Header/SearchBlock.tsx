// ПОЛНОСТЬЮ ИЗМЕНИТЬ ЭТОТ КОМПОНЕНТ

import { FC, FormEvent, useEffect, useState } from 'react';

import notFound from '@/assets/images/svg/NotFound.svg';
import loading from '@/assets/images/svg/Loading.svg';

import searchIcon from '@/assets/images/svg/Search.svg';

import temporaryItem from '@/shared/data/temporaryData.json';
import { Product } from '@/shared/types/product';
import { useDebounce } from '@/shared/helpers/hooks/UseDebounce';
import SearchCard from '@/components/ui/SearchCard/SearchCard';

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
      {(isInputFocused || itemsNotFound) && <div className="overlay" />}
      <div className="relative ml-[60px] w-[540px] h-[52px] z-11">
        <form onSubmit={handlerSearch}>
          <input
            className="bg-[var(--white)] w-full h-[52px] pl-[10px] rounded-[10px] border-2 border-solid border-[var(--gray)]"
            type="text"
            value={dataSearch}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => handlerBlur()}
            onChange={(e) => setDataSearch(e.target.value)}
            placeholder="Начните поиск..."
          />
          <button
            className="w-[40px] h-[40px] bg-[var(--orange)] pl-[11px] rounded-[10px] absolute transition-colors duration-300 ease-in-out right-[6px] top-1/2 -translate-y-1/2 hover:bg-gray-dark-custom"
            type="submit"
          >
            <img src={searchIcon} alt="Кнопка поиска" />
          </button>
        </form>

        {itemsNotFound && (
          <div className="absolute mt-[10px] w-full z-[11] rounded-[10px] border-2 border-[var(--gray)] bg-[var(--white)]">
            <img src={notFound} alt="Ничего не найдено" />
            <p>Ничего не найдено....</p>
          </div>
        )}
        {isInputFocused &&
          (isLoading ? (
            <div className="absolute mt-[10px] w-full z-[11] rounded-[10px] border-2 border-[var(--gray)] bg-[var(--white)] cursor-pointer h-[300px] flex justify-center items-center">
              <img src={loading} alt="Идет загрузка" />
            </div>
          ) : (
            <ul className="absolute mt-[10px] w-full z-[11] rounded-[10px] border-2 border-[var(--gray)] bg-[var(--white)] cursor-pointer">
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
