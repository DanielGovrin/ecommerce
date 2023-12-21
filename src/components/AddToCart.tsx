import { useCart } from '../CartContext';
import styles from './addtocart.module.css';
import { Item } from './datatypes';

export const AddToCart: React.FC<Item> = ({
   id,
   mainTitle,
   secondaryTitle,
   image,
   price,
}) => {
   const userCartContext = useCart();
   const handleClick = () => {
      userCartContext.addToCart({
         id,
         mainTitle,
         secondaryTitle,
         image,
         price,
      });
   };

   return (
      <div className={styles.addtocartContainer}>
         <button className={styles.addToCartButton} onClick={handleClick}>
            <span className={styles.addToCartText}>Add To Cart</span>
         </button>
      </div>
   );
};
