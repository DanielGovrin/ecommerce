import { Card } from '../components/card';
import { PantsData } from '../components/data';
import { setCartCount } from '../components/datatypes';
import styles from './contentpages.module.css';

export const Pants = ({ setCartCount }: setCartCount) => {
   return (
      <div className={styles.pageContainer}>
         {PantsData.map((item) => (
            <Card {...item} setCartCount={setCartCount} />
         ))}
      </div>
   );
};

export default Pants;
