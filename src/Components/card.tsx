import { CardItem } from './datatypes'
import styles from './card.module.css'

function Card({ MainTitle, SecondaryTitle, Image, Price }: CardItem) {
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
         <p className={styles.price}>{Price}</p>
      </div>
   )
}

export default Card
