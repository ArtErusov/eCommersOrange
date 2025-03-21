import SelectCategory from './components/SelectCategory/SelectCategory';
import SelectSort from './components/SelectSort/SelectSort';
import styles from './styles.module.css';
function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.selection_block}>
        <SelectCategory />
        <SelectSort />
      </div>
      <div className={styles.test}></div>
    </div>
  );
}
export default Header;
