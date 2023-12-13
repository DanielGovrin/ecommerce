import { useState } from 'react';
import styles from './header.module.css';
import { cartCount } from './datatypes';

export const Header = ({ cartCount }: cartCount) => {
   const [searchWord, setSearchWord] = useState('');

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
                  value={searchWord}
                  placeholder="Search..."
                  // onChange={handleChange}
               />
            </form>

            <button type="button" className={styles.shoppingBagButton}>
               <p>{cartCount}</p>
            </button>
         </div>
      </div>
   );
};
