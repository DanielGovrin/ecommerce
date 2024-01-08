import { useState } from 'react';
import styles from './addtocart.module.css';
import { setCartCount } from './datatypes';


export const AddToCart = ({ setCartCount }: setCartCount) => {
   const [isAnimating, setIsAnimating] = useState(false);
   const handleClick = () => {
      setIsAnimating(true)


      setTimeout(() => {
         setIsAnimating(false);
      }, 500);
      setCartCount((prevCartCount) => prevCartCount + 1);
   };

   return (
      <div className={styles.addtocartContainer}>
         <button className={`${styles.addToCartButton} ${isAnimating ? styles.animateCart : ''}`} onClick={handleClick}>
            <span className={styles.addToCartText}>Add To Cart</span>
         </button>
      </div>
   );
};

