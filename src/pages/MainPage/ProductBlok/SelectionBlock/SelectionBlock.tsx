import { FC, useState } from 'react';
import styles from './SelectionBlock.module.css';
import { SelectionBlockProps } from './SelectionBlock.types';

const SelectionBlock: FC<SelectionBlockProps> = ({
  category,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [selectedSorting, setSelectedSorting] = useState<number>(0);
  const [sortActive, setSortActive] = useState<boolean>(false);

  const sortCategory: string[] = ['Лучшее совпадение', 'Сначала дешевле', 'Сначала дороже'];

  const handleSortSelect = (index: number): void => {
    setSelectedSorting(index);
    setSortActive(false);
  };

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
          {sortCategory[selectedSorting]}
        </div>

        {sortActive && (
          <ul>
            {sortCategory.map(
              (item, index) =>
                index !== selectedSorting && (
                  <li
                    key={index}
                    onClick={() => handleSortSelect(index)}
                    className={styles['selection__sort-item']}
                  >
                    {item}
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
