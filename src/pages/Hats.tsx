import { HatsData } from '../components/data';
import Card from '../components/card';
import styles from './contentpages.module.css';

function Hats() {
   return (
      <div className={styles.pageContainer}>
         {HatsData.map((item) => (
            <Card {...item} key={item.id} />
         ))}
      </div>
   );
}

export default Hats;
