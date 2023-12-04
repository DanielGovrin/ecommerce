import { CardItem } from './datatypes';
import styles from './card.module.css';
import AddToCart from './AddToCart';

function Card({ id, MainTitle, SecondaryTitle, Image, Price }: CardItem) {
   return (
      <div className={styles.cardContainer}>
         <div className={styles.titles}>
            <h1 className={styles.mainTitle}>{MainTitle}</h1>
            <h3 className={styles.SecondaryTitle}>{SecondaryTitle}</h3>
         </div>
         <img
            className={styles.img}
            src={Image}
            alt={MainTitle}
            draggable={false}
         />
         <h3 className={styles.price}>{Price}</h3>
         <AddToCart id={id} />

      </div>
   );
}

export default Card;