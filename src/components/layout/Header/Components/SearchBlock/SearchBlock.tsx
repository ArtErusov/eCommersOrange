import { FC, FormEvent, useEffect, useState } from 'react';
import styles from './styles.module.css';
import searchIcon from '../../../../../assets/images/svg/Search.svg';
import { Product } from '../../../../../types/product';

const SearchBlock: FC = () => {
  //Временные данные удалить их, и подтягивать данные из мейн через контекст
  const temporaryItem: Product[] = [
    {
      id: 1235234,
      src: [
        'https://img.mvideo.ru/Pdb/small_pic/480/400221326b.jpg',
        'https://static.eldorado.ru/photos/71/715/165/43/new_71516543_l_1569486215.jpeg/resize/720x720/',
        'https://static.eldorado.ru/photos/71/715/165/43/new_71516543_l_1569486230.jpeg/resize/3840x2160/',
        'https://static.eldorado.ru/photos/71/715/165/43/new_71516543_l_1569486247.jpeg/resize/3840x2160/',
      ],
      price: 7499,
      rating: 37,
      review: 43,
      platforms: ['ps5', 'PC'],
      manufacturer: 'CI Games',
      text: 'Lords of the Fallen',
      dataSearch: 'Заглушка',
    },
    {
      id: 2432412,
      src: [
        'https://img.mvideo.ru/Pdb/small_pic/480/400177672b.jpg',
        'https://static.eldorado.ru/photos/71/715/165/43/new_71516543_l_1569486215.jpeg/resize/720x720/',
        'https://static.eldorado.ru/photos/71/715/165/43/new_71516543_l_1569486230.jpeg/resize/3840x2160/',
        'https://static.eldorado.ru/photos/71/715/165/43/new_71516543_l_1569486247.jpeg/resize/3840x2160/',
      ],
      price: 9950,
      rating: 42,
      review: 682,
      platforms: ['ps5'],
      manufacturer: 'PlayStation',
      text: "Marvel's Spider-Man 2",
      dataSearch: 'Заглушка',
    },
    {
      id: 3421654,
      src: [
        'https://img.mvideo.ru/Pdb/small_pic/480/400083897b.jpg',
        'https://static.eldorado.ru/photos/71/715/165/43/new_71516543_l_1569486215.jpeg/resize/720x720/',
        'https://static.eldorado.ru/photos/71/715/165/43/new_71516543_l_1569486230.jpeg/resize/3840x2160/',
        'https://static.eldorado.ru/photos/71/715/165/43/new_71516543_l_1569486247.jpeg/resize/3840x2160/',
      ],
      label: '28',
      price: 4499,
      rating: 48,
      review: 91,
      platforms: ['ps4', 'Xbox', 'ps5', 'PC'],
      manufacturer: 'Capcom',
      text: 'Resident Evil 4 Remake Стандартное издание',
      dataSearch: 'Заглушка',
    },
  ];

  const [dataSearch, setDataSearch] = useState<string>('');
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const [items, setItems] = useState<Product[]>([]);
  // const [isLoading, setIsLoading] = useState<boolean>(false);

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
    console.log('Форма отправлена', dataSearch);
    setDataSearch('');
  };

  const handlerBlur = () => {
    setIsInputFocused(false);
    setItems([]);
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
