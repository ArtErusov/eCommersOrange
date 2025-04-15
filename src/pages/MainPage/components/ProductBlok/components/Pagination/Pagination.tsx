import { FC } from 'react';
import styles from './styles.module.css';

const pagArray: number[] = [1, 2, 3];

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
}

const Pagination: FC<PaginationProps> = ({ page, setPage }) => {
  const handlerPreviousСlick = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const handlerNextСlick = () => {
    if (page !== 3) {
      setPage(page + 1);
    }
  };

  return (
    <ul className={styles.pagination}>
      <li
        onClick={() => handlerPreviousСlick()}
        className={page === 1 ? styles.pagination_item_passive : styles.pagination_item}
      >{`<`}</li>
      {pagArray.map((item, index) => (
        <li
          className={page === item ? styles.pagination_item_active : styles.pagination_item}
          onClick={() => setPage(index + 1)}
          key={index}
        >
          {item}
        </li>
      ))}
      <li
        onClick={() => handlerNextСlick()}
        className={page === 3 ? styles.pagination_item_passive : styles.pagination_item}
      >{`>`}</li>
    </ul>
  );
};
export default Pagination;
