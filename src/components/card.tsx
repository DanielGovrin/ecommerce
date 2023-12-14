import AddToCart from './AddToCart';
import styles from './card.module.css';
import { CardItem, setCartCount } from './datatypes';

export const Card = ({
   mainTitle,
   secondaryTitle,
   image,
   price,
   setCartCount,
}: CardItem & setCartCount) => {
   return (
      <div className={styles.cardContainer}>
         <img
            className={styles.img}
            src={image}
            alt={mainTitle}
            draggable={false}
         />
         <div className={styles.listingContainer}>
            <h3 className={styles.mainTitle}>{mainTitle}</h3>
            <h4 className={styles.secondaryTitle}>{secondaryTitle}</h4>
            <h3 className={styles.price}>{price}</h3>
         </div>
         <AddToCart setCartCount={setCartCount} />
      </div>
   );
};
