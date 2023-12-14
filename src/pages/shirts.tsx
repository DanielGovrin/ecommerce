import { Card } from '../components/card';
import { ShirtsData } from '../components/data';
import { setCartCount } from '../components/datatypes';
import styles from './contentpages.module.css';

export const Shirts = ({ setCartCount }: setCartCount) => {
   return (
      <div className={styles.pageContainer}>
         {ShirtsData.map((item) => (
            <Card {...item} setCartCount={setCartCount} />
         ))}
      </div>
   );
};
