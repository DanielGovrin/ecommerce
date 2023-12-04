import { CardItem } from './datatypes';
import styles from './card.module.css';
import AddToCart from './AddToCart';

function Card({ id, mainTitle, secondaryTitle, image, price }: CardItem) {
   return (
      <div className={styles.cardContainer}>
         <div className={styles.titles}>
            <h1>{mainTitle}</h1>
            <h3>{secondaryTitle}</h3>
         </div>
         <img
            className={styles.img}
            src={image}
            alt={mainTitle}
            draggable={false}
         />
         <h3 className={styles.price}>{price}</h3>
         <AddToCart id={id} />
      </div>
   );
}

export default Card;
