import { FC, useState } from 'react';
import styles from './SelectionBlock.module.css';
import { SelectionBlockProps } from './SelectionBlock.types';

const SelectionBlock: FC<SelectionBlockProps> = ({
  setSelectedSortBy,
  selectedSortBy,
  sortBy,
  category,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [sortActive, setSortActive] = useState<boolean>(false);
  const handleSortSelect = (index: number): void => {
    setSelectedSortBy(index);
    setSortActive(false);
  };

  const selectedSortItem = sortBy.find((item) => item.id === selectedSortBy);

  return (
    <div className={styles.selection}>
      {/* Категории */}
      <ul className={styles['selection__category-list']}>
        {category.map((item) => (
          <li
            key={item.id}
            onClick={() => setSelectedCategory(item.id)}
            className={`${styles['selection__category-item']} ${
              item.id === selectedCategory ? styles['selection__category-item--active'] : ''
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>

      {/* Сортировка */}
      <div
        onMouseEnter={() => setSortActive(true)}
        onMouseLeave={() => setSortActive(false)}
        className={sortActive ? styles['selection__sort--active'] : styles['selection__sort']}
      >
        <div
          onClick={() => setSortActive(!sortActive)}
          className={styles['selection__sort-display']}
        >
          {selectedSortItem?.name}
        </div>

        {sortActive && (
          <ul>
            {sortBy.map(
              (item) =>
                item.id !== selectedSortBy && (
                  <li
                    key={item.id}
                    onClick={() => handleSortSelect(item.id)}
                    className={styles['selection__sort-item']}
                  >
                    {item.name}
                  </li>
                ),
            )}
          </ul>
        )}
      </div>
    </div>
  );
};
export default SelectionBlock;
