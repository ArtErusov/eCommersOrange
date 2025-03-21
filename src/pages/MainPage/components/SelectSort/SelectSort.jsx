import { useState } from 'react';
import styles from './styles.module.css';

function SelectSort() {
  const [selectedSorting, setSelectedSorting] = useState(0);
  const [sortActive, setSortActive] = useState(true);
  const sortCategory = ['Лучшее совпадение', 'Сначало дешевле', 'Сначало дороже'];
  console.log(sortActive);
  return (
    <div>
      <div onClick={() => setSortActive(!sortActive)} className={styles.sort}>
        {sortCategory[selectedSorting]}
      </div>
      {sortActive && (
        <ul className={styles.sort_list}>
          {sortCategory
            .filter((_, index) => selectedSorting !== index)
            .map((item, index) => (
              <li onClick={() => setSelectedSorting(index)} key={index}>
                {item}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
export default SelectSort;
