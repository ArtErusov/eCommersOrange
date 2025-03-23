import SelectCategory from './SelectCategory';
import SelectSort from './SelectSort';
import styles from './styles.module.css';

function SelectionBlock() {
  return (
    <div className={styles.selection_block}>
      <SelectCategory />
      <SelectSort />
    </div>
  );
}
export default SelectionBlock;
