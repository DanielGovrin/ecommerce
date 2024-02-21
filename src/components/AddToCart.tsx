import { CartItem } from './datatypes';
import { useCart } from '../utility';
import styles from './addtocart.module.css';

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
      if (setAddToCartClicked) setAddToCartClicked(true);
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
      <button
         className={styles.addToCartButton}
         onClick={handleClick}
         data-testid={`${id} add to cart button`}>
         <span className={styles.addToCartText}>Add To Cart</span>
      </button>
   );
};
