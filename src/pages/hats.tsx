import { Card } from '../components/card';
import { HatsData } from '../components/data';
import { setCartCount } from '../components/datatypes';
import styles from './contentpages.module.css';

export const Hats = ({ setCartCount }: setCartCount) => {
   return (
      <div className={styles.pageContainer}>
         {HatsData.map((item) => (
            <Card {...item} setCartCount={setCartCount} />
         ))}
      </div>
   );
};
