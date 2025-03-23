import SelectionBlock from './components/SelectionBlock/SelectionBlock';
import styles from './styles.module.css';
function Header() {
  return (
    <div className={styles.container}>
      <SelectionBlock />
    </div>
  );
}
export default Header;
