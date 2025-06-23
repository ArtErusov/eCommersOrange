import { FC } from 'react';
import CitySelector from '../CitySelector/CitySelector';
import styles from './TopHeader.module.css';

const TopHeader: FC = () => {
  return (
    <div className={styles['header__top-bar']}>
      <div className={`${styles['container']} ${styles['header__top-content']}`}>
        <CitySelector />
        <div className={styles['header__links']}>
          <a href="https://github.com/ArtErusov" target="_blank" rel="noopener noreferrer">
            Портфолио
          </a>
        </div>
      </div>
    </div>
  );
};
export default TopHeader;
