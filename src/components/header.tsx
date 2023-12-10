import { ChangeEventHandler, useState } from 'react';
import styles from './header.module.css';

function Header() {
   const [searchWord, setSearchWord] = useState('');

   const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
      setSearchWord(event.target.value);
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
                  value={searchWord}
                  placeholder="Search..."
                  onChange={handleChange}
               />
            </form>
            <img
               src="src/assets/shopping-bag.svg"
               className={styles.shoppingBagLogo}
               draggable="false"
            />
         </div>
      </div>
   );
}

export default Header;
