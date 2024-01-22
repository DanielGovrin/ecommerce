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

export const areNumbersClose = (num1: number, num2: number, tolerance: number): boolean => {
   return Math.abs(num1 - num2) <= tolerance;
};
