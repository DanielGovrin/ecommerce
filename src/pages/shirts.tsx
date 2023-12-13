import { Card } from '../components/card';
import { ShirtsData } from '../components/data';
import styles from './contentpages.module.css';

function Shirts() {
   return (
      <div className={styles.pageContainer}>
         {ShirtsData.map((item) => (
            <Card {...item} />
         ))}
      </div>
   );
}

export default Shirts;
