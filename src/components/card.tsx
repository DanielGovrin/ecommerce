import { CardItem } from './datatypes';
import styles from './card.module.css';
import AddToCart from './AddToCart';

function Card({ id, mainTitle, secondaryTitle, image, price }: CardItem) {
   return (
      <div className={styles.cardContainer}>
         <img
            className={styles.img}
            src={image}
            alt={mainTitle}
            draggable={false}
         />
         <div className={styles.listingContainer}>
            <div className={styles.titles}>
               <h4 className={styles.mainTitle}>{mainTitle}</h4>
               <h5 className={styles.secondaryTitle}>{secondaryTitle}</h5>
               <h3 className={styles.price}>{price}</h3>
            </div>
            <AddToCart id={id} />
         </div>
      </div>
   );
}

export default Card;
