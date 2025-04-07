import styles from './styles.module.css';

import { FC } from 'react';

const Sceleton: FC = () => {
  return (
    <div className={styles.sceleton}>
      <div className={styles.sceleton_img}></div>
      <div className={styles.sceleton_price}></div>
      <div className={styles.sceleton_manufacturer}></div>
      <div className={styles.sceleton_text}></div>
      <div className={styles.sceleton_text}></div>
    </div>
  );
};
export default Sceleton;
