import { useCart } from '../CartContext';
import styles from './addtocart.module.css';
import { CartItem } from './datatypes';

export const AddToCart: React.FC<CartItem> = ({
   id,
   mainTitle,
   secondaryTitle,
   image,
   price,
   size,   
}) => {
   const { addToCart } = useCart();
   const handleClick = () => {
      addToCart({
         id,
         mainTitle,
         secondaryTitle,
         image,
         price,
         size,
      });
   };

   return (
      <button
         className={styles.addToCartButton}
         onClick={handleClick}
         disabled={!size}>
         <span className={styles.addToCartText}>Add To Cart</span>
      </button>
   );
};
