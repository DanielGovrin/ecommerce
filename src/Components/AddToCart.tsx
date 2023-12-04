import { useState } from 'react';
import styles from './addtocart.module.css';

interface AddToCartProps {
   id: string;
}

function AddToCart({ id }: AddToCartProps) {
   const [buttonText, setButtonText] = useState(true);

   const handleClick = () => {
      setButtonText((prevButtonText) => (prevButtonText = !prevButtonText));
   };

   return (
      <button
         className={`${styles.button} ${
            buttonText ? styles.ShowText : styles.ShowCart
         }`}
         onClick={handleClick}>
         Add To Cart
      </button>
   );
}

export default AddToCart;
