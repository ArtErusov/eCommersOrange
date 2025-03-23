import { useState } from 'react';
import styles from './styles.module.css';

function SelectSort() {
  const [selectedSorting, setSelectedSorting] = useState(0);
  const [sortActive, setSortActive] = useState(false);
  const sortCategory = ['Лучшее совпадение', 'Сначала дешевле', 'Сначала дороже'];
  console.log(sortActive);

  const handleSelect = (index) => {
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
}
export default SelectSort;
