import React, { createContext, useState, useContext } from 'react';
import { Item } from './components/datatypes';

interface CartContextProps {
   items: Item[];
   addToCart: (item: Item) => void;
   removeFromCart: (index: number) => void;
   toggleCartModal: () => void;
   showCartModal: boolean;
   clearCart: () => void;
}

export const CartContext = createContext<CartContextProps | undefined>(
   undefined
);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const [items, setCartItems] = useState<Item[]>([]);
   const [showCartModal, setShowCartModal] = useState(false);

   const addToCart = (item: Item) => {
      setCartItems((prevItems) => [...prevItems, item]);
   };

   const removeFromCart = (index: number) => {
      setCartItems((prevItems) => {
         const newItems = [...prevItems];
         newItems.splice(index, 1);
         return newItems;
      });
   };

   const toggleCartModal = () => {
      setShowCartModal((prev) => !prev);
   };

   const clearCart = () => {
      setCartItems([]);
   };

   return (
      <CartContext.Provider
         value={{
            items,
            addToCart,
            removeFromCart,
            toggleCartModal,
            showCartModal,
            clearCart,
         }}>
         {children}
      </CartContext.Provider>
   );
};

export const useCart = (): CartContextProps => {
   const context = useContext(CartContext);
   if (!context) {
      throw new Error('useCart must be used within a CartProvider');
   }
   return context;
};
