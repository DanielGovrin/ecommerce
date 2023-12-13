import styles from './addtocart.module.css';

const AddToCart = () => {
   const handleClick = () => {
      //    setCartCount(prevCartCount => prevCartCount + 1);
   };

   return (
      <div className={styles.addtocartContainer}>
         <button className={styles.addtocart} onClick={handleClick}>
            Add To Cart
         </button>
      </div>
   );
};

export default AddToCart;
