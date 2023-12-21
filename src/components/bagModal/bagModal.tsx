import { useCart } from '../../CartContext';
import { BagItem } from '../bag-item/bag-item';
import styles from './bag.module.css';

export const BagModal = () => {
   const { addToCart, cartItems } = useCart();

   return (
      <div className={styles.container}>
         <div className={styles.itemList}>
            {cartItems.map((item) => (
               <BagItem {...item} />
            ))}
         </div>

         <div className={styles.ordersummary}>
            <h2>Summary</h2>
         </div>
      </div>
   );
};
