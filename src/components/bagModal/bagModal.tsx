import { useEffect, useRef, useState } from 'react';
import { useCart } from '../../CartContext';
import { BagItem } from '../bag-item/bag-item';
import styles from './bagmodal.module.css';
import BagModal_module from './bagModal.module.css';

export const BagModal = () => {
   const { cartItems, showModal, toggleCartModal } = useCart();
   const modalRef = useRef<HTMLDivElement>(null);
   const [isMouseOver, setIsMouseOver] = useState(false);
   const totalPrice: number = cartItems.reduce(
      (acc, item) => acc + parseFloat(item.price),
      0
   );

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
               <div className={BagModal_module.ordersummaryheader}>
                  <h2 className={BagModal_module.summarytext}>
                     {' '}
                     Order Summary
                  </h2>
                  <h2
                     className={
                        BagModal_module.totalprice
                     }>{`$ ${totalPrice.toFixed(2)}`}</h2>
               </div>
            </div>
         </div>
      )
   );
};
