import { FC } from 'react';
import styles from './styles.module.css';

// const pagArray: number[] = [1, 2, 3];

interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
  elementsOnPage: number;
}

const Pagination: FC<PaginationProps> = ({ elementsOnPage, page, setPage }) => {
  const handlerPreviousСlick = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const handlerNextСlick = () => {
    if (page !== elementsOnPage) {
      setPage(page + 1);
    }
  };

  return (
    <ul className={styles.pagination}>
      <li
        onClick={() => handlerPreviousСlick()}
        className={page === 1 ? styles.pagination_item_passive : styles.pagination_item}
      >{`<`}</li>
      {Array(elementsOnPage)
        .fill(null)
        .map((_, index) => (
          <li
            className={page === index + 1 ? styles.pagination_item_active : styles.pagination_item}
            onClick={() => setPage(index + 1)}
            key={index}
          >
            {index + 1}
          </li>
        ))}
      <li
        onClick={() => handlerNextСlick()}
        className={
          page === elementsOnPage ? styles.pagination_item_passive : styles.pagination_item
        }
      >{`>`}</li>
    </ul>
  );
};
export default Pagination;
