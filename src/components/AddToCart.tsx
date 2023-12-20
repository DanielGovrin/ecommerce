import { useCart } from '../CartContext';
import styles from './addtocart.module.css';
import { Item } from './datatypes';


export const AddToCart: React.FC<Item> = ({ mainTitle, secondaryTitle, image, price }) => {
   const userContext = useCart();
   const handleClick = () => {
      userContext.addToCart({ mainTitle, secondaryTitle, image, price })
   }

   return (
      <div className={styles.addtocartContainer}>
         <button className={styles.addToCartButton} onClick={handleClick}>
            <span className={styles.addToCartText}>Add To Cart</span>
         </button>
      </div>
   );
};
