import styles from './styles.module.css';

import AdvertisingBanner from './AdvertisingBanner.tsx';
import ProductCardBanner from './ProductCardBanner.tsx';

function BannersBlock() {
  return (
    <div className={styles.banner_block}>
      <AdvertisingBanner />
      <ProductCardBanner />
    </div>
  );
}
export default BannersBlock;
