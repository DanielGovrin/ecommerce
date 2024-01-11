import React, { createContext, useState } from 'react';
import { CartContextProps, CartItem, Item, Sizes } from './components/datatypes';
import { generateCartItemId } from './utility';


export const CartContext = createContext<CartContextProps | undefined>(
   undefined
);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
   children,
}) => {
   const [cartItems, setCartItems] = useState<Map<string, number>>(
      new Map<string, number>()
   );
   const [showModal, setShowModal] = useState(false);
   const [totalPrice, setTotalPrice] = useState<number>(0);
   const [numOfItems, setNumOfItems] = useState<number>(0);

   const addToCart = (item: CartItem) => {
      setTotalPrice((prevPrice) => prevPrice + parseFloat(item.price));
      setNumOfItems((prevNumOfItems) => prevNumOfItems + 1);
      setCartItems((prevCartItems) => {
         const generatedId = generateCartItemId(item.id, item.size);
         const quantity = prevCartItems.get(generatedId) ?? 0;

         return new Map<string, number>(prevCartItems).set(
            generatedId,
            quantity + 1
         );
      });
   };


   const removeFromCart = (item: CartItem) => {
      const generatedId = generateCartItemId(item.id, item.size);

      // Get the number of items and calculate the total price for the removed item
      const numOfItemsRemoved: number = cartItems.get(generatedId) ?? 0;
      const totalItemPrice = parseFloat(item.price) * numOfItemsRemoved;

      // Remove the item from the cartItems Map
      cartItems.delete(generatedId);

      // Create a new Map to represent the updated cartItems (shallow copy)
      const newCart = new Map<string, number>(cartItems);

      // Update the state with the new cartItems Map
      setCartItems(newCart);

      // Update the number of items in the cart
      setNumOfItems((prevNumOfItems) => prevNumOfItems - numOfItemsRemoved);
      // Update the total price by subtracting the total price of the removed item
      setTotalPrice((prevTotalPrice) => prevTotalPrice - totalItemPrice);
   };

   const ChangeNumOfItems = (item: Item, size: Sizes, quantity: number) => {
      const generatedId = generateCartItemId(item.id, size);
      const newCartItems = new Map<string, number>(cartItems);

      // Calculating the old and new prices of the specific item
      const oldNumOfItems: number = newCartItems.get(generatedId) ?? 0;
      const oldItemPrice: number = oldNumOfItems * parseFloat(item.price);
      const newItemPrice: number = parseFloat(item.price) * quantity;

      // Update the quantity for the specific item and size
      newCartItems.set(generatedId, quantity);
      setCartItems(newCartItems);
      setTotalPrice((prevPrice) => prevPrice - oldItemPrice + newItemPrice);
   }


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
            totalPrice,
            numOfItems,
            ChangeNumOfItems,
         }}>
         {children}
      </CartContext.Provider>
   );
};

