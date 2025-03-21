import { useState } from 'react';
import styles from './styles.module.css';

function SelectCategory() {
  const category = ['Все', 'ps 5', 'Swith', 'Xbox', 'PC'];
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <ul className={styles.category_list}>
      {category.map((item, index) => (
        <li
          onClick={() => setSelectedCategory(index)}
          className={index === selectedCategory ? styles.category_active : styles.category_item}
          key={index}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
export default SelectCategory;
