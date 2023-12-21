import { AddToCart } from './AddToCart';
import styles from './card.module.css';
import { Item } from './datatypes';

export const Card: React.FC<Item> = ({
   id,
   mainTitle,
   secondaryTitle,
   image,
   price,
}) => {
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
         <AddToCart {...{ id, mainTitle, secondaryTitle, image, price }} />
      </div>
   );
};
