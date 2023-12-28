import { useEffect, useRef, useState } from 'react';
import { useCart } from '../../CartContext';
import { BagItem } from '../bag-item/bag-item';
import styles from './bag.module.css';

export const BagModal = () => {
   const { cartItems, showModal, toggleCartModal } = useCart();
   const modalRef = useRef<HTMLDivElement>(null);
   const [isMouseOver, setIsMouseOver] = useState(false);

   useEffect(() => {
      const handleMouseEnter = () => {
         setIsMouseOver(true);
      };

      const handleMouseLeave = () => {
         setIsMouseOver(false);
      };

      const handleClickOutside = (event: MouseEvent) => {
         if (
            modalRef.current &&
            !modalRef.current.contains(event.target as Node)
         ) {
            toggleCartModal();
         }
      };

      const handleGlobalMouseMove = (event: MouseEvent) => {
         setIsMouseOver(
            modalRef.current?.contains(event.target as Node) ?? false
         );
      };

      if (showModal) {
         document.addEventListener('mousedown', handleClickOutside);
         modalRef.current?.addEventListener('mouseenter', handleMouseEnter);
         modalRef.current?.addEventListener('mouseleave', handleMouseLeave);
         document.addEventListener('mousemove', handleGlobalMouseMove);
      }

      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
         modalRef.current?.removeEventListener('mouseenter', handleMouseEnter);
         modalRef.current?.removeEventListener('mouseleave', handleMouseLeave);
         document.removeEventListener('mousemove', handleGlobalMouseMove);
      };
   }, [showModal, toggleCartModal]);

   useEffect(() => {
      document.body.style.cursor = showModal
         ? isMouseOver
            ? 'default'
            : 'pointer'
         : 'default';
      return () => {
         document.body.style.cursor = 'default';
      };
   }, [isMouseOver, showModal]);

   return (
      showModal && (
         <div className={styles.container} ref={modalRef}>
            <div className={styles.itemList}>
               {cartItems.map((item) => (
                  <BagItem {...item} />
               ))}
            </div>

            <div className={styles.ordersummary}>
               <h2 className={styles.summary}> Order Summary</h2>

            </div>
         </div>
      )
   );
};
