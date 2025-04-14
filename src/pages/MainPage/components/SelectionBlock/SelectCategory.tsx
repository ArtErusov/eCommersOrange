import { FC } from 'react';
import styles from './styles.module.css';

interface Category {
  id: string;
  name: string;
}

interface SelectCategoryProps {
  category: Category[];
  selectedCategory: string;
  setSelectedCategory: (id: string) => void;
}

const SelectCategory: FC<SelectCategoryProps> = ({
  category,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <ul className={styles.category_list}>
      {category.map((item) => (
        <li
          onClick={() => setSelectedCategory(item.id)}
          className={item.id === selectedCategory ? styles.category_active : styles.category_item}
          key={item.id}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};
export default SelectCategory;
