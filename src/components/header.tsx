import styles from './header.module.css';
import { useCart } from '../CartContext';

export const Header = () => {
   const { cartItems, toggleCartModal, numOfItems} = useCart();
   const handleShoppingBagClick = () => {
      toggleCartModal();
   };

   return (
      <div className={styles.headerContainer}>
         <img
            src="/src/assets/logo.svg"
            alt="Logo"
            className={styles.logo}
            draggable="false"
         />

         <div className={styles.categories}></div>

         <div className={styles.searchAndCart}>
            <form className={styles.searchbarContainer}>
               <button type="submit" className={styles.magnifyGlass}></button>
               <input
                  type="search"
                  className={styles.siteSearch}
                  placeholder="Search..."
               />
            </form>

            <button
               type="button"
               className={styles.shoppingBagButton}
               onClick={handleShoppingBagClick}>
               {numOfItems > 0 && (
                  <p className={styles.numOfItems}>
                     {numOfItems < 10 ? numOfItems : '9+'}
                  </p>
               )}
            </button>
         </div>
      </div>
   );
};
