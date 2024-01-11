import { useContext } from 'react';
import { CartContextProps, Sizes } from './components/datatypes';
import { CartContext } from './CartContext';

export const generateCartItemId = (id: string, size: Sizes) => {
   return `${id}#${size}`;
};

export const useCart = (): CartContextProps => {
   const context = useContext(CartContext);
   if (!context) {
      throw new Error('useCart must be used within a CartProvider');
   }
   return context;
};
