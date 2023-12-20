import { Card } from '../components/card';
import { PantsData } from '../components/data';
import styles from './contentpages.module.css';

export const Pants = () => {
   return (
      <div className={styles.pageContainer}>
         {PantsData.map((item) => (
            <Card {...item} />
         ))}
      </div>
   );
};
