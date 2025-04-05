import Button from '../Button/Button';
import styles from './styles.module.css';

function ProductCard({ item }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <div className={styles.mainContent}>
          <img className={styles.card_img} src={item.src[0]} alt="" />
          <p className={styles.card_price}>{item.price} ₽</p>
          <h3 className={styles.card_text}>
            {item.manufacturer ? (
              <>
                <span>{item.manufacturer}</span>
                <span>{item.text}</span>
              </>
            ) : (
              item.text
            )}
          </h3>
        </div>
        <div className={styles.extraContent}>
          <Button>в корзину</Button>
        </div>
      </div>
    </div>
  );
}
export default ProductCard;
