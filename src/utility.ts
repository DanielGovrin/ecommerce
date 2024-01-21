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
   console.log(
      `Number 1 is ${num1} and the second number is ${num2}, the difference between them is ${Math.abs(
         num1 - num2
      )}`
   );
   const dif: boolean = Math.abs(num1 - num2) <= tolerance;
   return dif;
};
