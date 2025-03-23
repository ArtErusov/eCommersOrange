import styles from './styles.module.css';

import AdvertisingBanner from './AdvertisingBanner';
import ProductCardBanner from './ProductCardBanner';

function BannersBlock() {
  return (
    <div className={styles.banner_block}>
      <AdvertisingBanner />
      <ProductCardBanner />
    </div>
  );
}
export default BannersBlock;
