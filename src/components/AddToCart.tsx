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
   setAddToCartClicked,
}) => {
   const { addToCart } = useCart();
   const handleClick = () => {
      setAddToCartClicked(true);
      if (size) {
         addToCart({
            id,
            mainTitle,
            secondaryTitle,
            image,
            price,
            size,
            setAddToCartClicked,
         });
      }
   };

   return (
      <button className={styles.addToCartButton} onClick={handleClick}>
         <span className={styles.addToCartText}>Add To Cart</span>
      </button>
   );
};
