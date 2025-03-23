import BannersBlock from './components/BannersBlock/BannersBlock';
import SelectionBlock from './components/SelectionBlock/SelectionBlock';
import styles from './styles.module.css';
function Header() {
  return (
    <div className={styles.container}>
      <BannersBlock />
      <SelectionBlock />
    </div>
  );
}
export default Header;
