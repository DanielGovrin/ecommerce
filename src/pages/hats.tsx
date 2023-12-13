import { Card } from '../components/card';
import { HatsData } from '../components/data';
import styles from './contentpages.module.css';

const Hats = () => {
   return (
      <div className={styles.pageContainer}>
         {HatsData.map((item) => (
            <Card {...item} />
         ))}
      </div>
   );
};

export default Hats;
