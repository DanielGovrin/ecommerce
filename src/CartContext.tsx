import React, { createContext, useState, useContext } from 'react';
import { Item } from './components/datatypes';

interface CartContextProps {
   cartItems: Item[];
   addToCart: (item: Item) => void;
   removeFromCart: (id: string) => void;
   toggleCartModal: () => void;
   showModal: boolean;
   clearCart: () => void;
}

export const CartContext = createContext<CartContextProps | undefined>(
   undefined
);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const [cartItems, setCartItems] = useState<Item[]>([]);
   const [showModal, setShowModal] = useState(false);

   const addToCart = (item: Item) => {
      setCartItems((prevItems) => [...prevItems, item]);
   };

   const removeFromCart = (id: string) => {
      setCartItems((prevItems) =>
         [...prevItems].filter((item) => item.id !== id)
      );
   };

   const toggleCartModal = () => {
      setShowModal((prev) => !prev);
   };

   const clearCart = () => {
      setCartItems([]);
   };

   return (
      <CartContext.Provider
         value={{
            cartItems,
            addToCart,
            removeFromCart,
            toggleCartModal,
            showModal,
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
