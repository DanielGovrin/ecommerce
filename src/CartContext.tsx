import React, { createContext, useState, useContext } from 'react';
import { CartItem, Sizes } from './components/datatypes';

interface CartContextProps {
   cartItems: Map<string, number>;
   addToCart: (item: CartItem) => void;
   removeFromCart: (item: CartItem) => void;
   toggleCartModal: () => void;
   showModal: boolean;
   clearCart: () => void;
}

function generateCartItemId(id: string, size: Sizes) {
   return `${id}#${size}`;
}

export const CartContext = createContext<CartContextProps | undefined>(
   undefined
);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const [cartItems, setCartItems] = useState<Map<string, number>>(new Map<string, number>());
   const [showModal, setShowModal] = useState(false);

   const addToCart = (item: CartItem) => {
      const generatedId = generateCartItemId(item.id, item.size);
      const quantity = cartItems.get(generatedId) ?? 0;
      setCartItems({ ...cartItems, [generatedId]: quantity + 1 });
   };

   const removeFromCart = (item: CartItem) => {
      const generatedId = generateCartItemId(item.id, item.size);
      cartItems.delete(generatedId)
      const newCart = new Map<string, number>(cartItems)
      setCartItems(newCart);
   };

   const clearCart = () => {
      setCartItems(new Map<string, number>());
   };

   const toggleCartModal = () => {
      setShowModal((prev) => !prev);
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
