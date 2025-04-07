import { FC, useState } from 'react';
import styles from './styles.module.css';

const SelectCategory: FC = () => {
  const category: string[] = ['Все', 'ps 5', 'Swith', 'Xbox', 'PC'];
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

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
};
export default SelectCategory;
