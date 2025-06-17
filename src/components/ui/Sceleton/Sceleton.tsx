import { FC } from 'react';
import styles from './Sceleton.module.css';

const Sceleton: FC = () => {
  return (
    <div className={styles['sceleton']}>
      <div className={styles['sceleton__image']} />
      <div className={styles['sceleton__line-small']} />
      <div className={styles['sceleton__line-medium']} />
      <div className={styles['sceleton__line-large']} />
      <div className={styles['sceleton__line-between']} />
    </div>
  );
};

export default Sceleton;
