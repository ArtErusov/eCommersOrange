import { FC } from 'react';
import SelectCategory from './SelectCategory.tsx';
import SelectSort from './SelectSort.tsx';
import styles from './styles.module.css';

interface Category {
  id: string;
  name: string;
}

interface SelectionBlockProps {
  category: Category[];
  selectedCategory: string;
  setSelectedCategory: (id: string) => void;
}

const SelectionBlock: FC<SelectionBlockProps> = ({
  category,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className={styles.selection_block}>
      <SelectCategory
        category={category}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <SelectSort />
    </div>
  );
};
export default SelectionBlock;
