import styles from './header.module.css';

export const Header = () => {
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

            <button type="button" className={styles.shoppingBagButton}>
               <p>{cartCount <= 0 ? '' : cartCount < 10 ? cartCount : '9+'}</p>
            </button>
         </div>
      </div>
   );
};
