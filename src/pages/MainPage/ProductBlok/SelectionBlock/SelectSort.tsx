import { FC, useState } from 'react';
import styles from './styles.module.css';

const SelectSort: FC = () => {
  const [selectedSorting, setSelectedSorting] = useState<number>(0);
  const [sortActive, setSortActive] = useState<boolean>(false);
  const sortCategory: string[] = ['Лучшее совпадение', 'Сначала дешевле', 'Сначала дороже'];

  const handleSelect = (index: number): void => {
    setSelectedSorting(index);
    setSortActive(false);
  };

  return (
    <div
      onMouseEnter={() => setSortActive(true)}
      onMouseLeave={() => setSortActive(false)}
      className={sortActive ? styles.sort_active : styles.sort}
    >
      <div onClick={() => setSortActive(!sortActive)} className={styles.sort_display}>
        {sortCategory[selectedSorting]}
      </div>
      {sortActive && (
        <ul>
          {sortCategory.map(
            (item, index) =>
              index !== selectedSorting && (
                <li onClick={() => handleSelect(index)} key={index} className={styles.sort_item}>
                  {item}
                </li>
              ),
          )}
        </ul>
      )}
    </div>
  );
};
export default SelectSort;
