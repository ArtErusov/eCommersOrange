import styles from './styles.module.css';
import bannerIMG from '../../../../assets/images/bannerIMG.png';

function AdvertisingBanner() {
  return (
    <div className={styles.banner}>
      <img src={bannerIMG} alt="" />
    </div>
  );
}
export default AdvertisingBanner;
