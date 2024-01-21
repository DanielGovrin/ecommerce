import { useEffect, useRef, useState } from 'react';
import { useCart } from '../../utility';
import styles from './bagmodal.module.css';
import { dataArrayByName } from '../data';
import BagModal_module from './bagModal.module.css';
import { CartItem, Item, Sizes } from '../datatypes';
import { BagItem } from '../bag-item/bag-item';

export const BagModal = () => {
   const { cartItems, showModal, toggleCartModal, totalPrice } = useCart();
   const modalRef = useRef<HTMLDivElement>(null);
   const [isMouseOver, setIsMouseOver] = useState(false);
   const currentModalRef = modalRef.current;
   useEffect(() => {
      const handleMouseEnter = () => {
         setIsMouseOver(true);
      };

      const handleMouseLeave = () => {
         setIsMouseOver(false);
      };

      const handleClickOutside = (event: MouseEvent) => {
         if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            toggleCartModal();
         }
      };

      const handleGlobalMouseMove = (event: MouseEvent) => {
         setIsMouseOver(modalRef.current?.contains(event.target as Node) ?? false);
      };

      if (showModal) {
         document.addEventListener('mousedown', handleClickOutside);
         modalRef.current?.addEventListener('mouseenter', handleMouseEnter);
         modalRef.current?.addEventListener('mouseleave', handleMouseLeave);
         document.addEventListener('mousemove', handleGlobalMouseMove);
      }

      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
         currentModalRef?.removeEventListener('mouseenter', handleMouseEnter);
         currentModalRef?.removeEventListener('mouseleave', handleMouseLeave);
         document.removeEventListener('mousemove', handleGlobalMouseMove);
      };
   }, [showModal, toggleCartModal, currentModalRef]);

   useEffect(() => {
      document.body.style.cursor = showModal ? (isMouseOver ? 'default' : 'pointer') : 'default';
      return () => {
         document.body.style.cursor = 'default';
      };
   }, [isMouseOver, showModal]);

   function getItemFromId(id: string): Item {
      // Extract the prefix (e.g., "pants" from "pants421")
      const prefix = id.replace(/[0-9]+$/, '');

      // Capitalize the first letter and concatenate "Data"
      const arrayDataName = prefix.charAt(0).toUpperCase() + prefix.slice(1) + 'Data';
      const arrayData: Item[] | undefined = dataArrayByName[arrayDataName];
      return arrayData.find((item) => item.id == id)!;
   }

   return (
      <div
         className={showModal ? styles.container : styles.notVisible}
         ref={modalRef}
         data-testid="bagModal">
         <div className={styles.itemList}>
            {Array.from(cartItems.entries()).map(([key]) => {
               const [id, size] = key.split('#');
               const cartItem: CartItem = {
                  ...getItemFromId(id),
                  size: size as Sizes,
               };
               return <BagItem {...cartItem} />;
            })}
         </div>
         <div className={styles.ordersummary}>
            <div className={BagModal_module.ordersummaryheader}>
               <h2 className={BagModal_module.summarytext}> Order Summary</h2>
               <h2 className={BagModal_module.totalprice} data-testid="total-price">
                  {totalPrice.toFixed(2)}
               </h2>
            </div>
         </div>
      </div>
   );
};
