import { useCart } from '../../CartContext';
import styles from './bag.module.css'


export const Bag = () => {
   const useCartContext = useCart();
   return <div>
      <div className={styles.itemList}>

      </div>

      <div className={styles.ordersummary}>

      </div>

   </div>;
};
