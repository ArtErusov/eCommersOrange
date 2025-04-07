import { FC } from 'react';
import SelectCategory from './SelectCategory.tsx';
import SelectSort from './SelectSort.tsx';
import styles from './styles.module.css';

const SelectionBlock: FC = () => {
  return (
    <div className={styles.selection_block}>
      <SelectCategory />
      <SelectSort />
    </div>
  );
};
export default SelectionBlock;
