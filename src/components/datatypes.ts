export type Sizes = 'S' | 'M' | 'L' | 'XL' | null;

export interface CartContextProps {
   cartItems: Map<string, number>;
   addToCart: (item: CartItem) => void;
   removeFromCart: (item: CartItem) => void;
   toggleCartModal: () => void;
   showModal: boolean;
   totalPrice: number;
   clearCart: () => void;
   numOfItems: number;
   ChangeNumOfItems: (item: Item, size: Sizes, quantity: number) => void;
}

export interface Item {
   id: string;
   mainTitle: string;
   secondaryTitle: string;
   image: string;
   price: string;
}

export interface CartItem extends Item {
   size: Sizes;
   setAddToCartClicked?: (addToCartClicked: boolean) => void;
}

export interface SidebarItem {
   title: string;
   path: string;
   icon: JSX.Element;
}

export interface QuantitySelector extends Item {
   size: Sizes;
   quantity: number;
}

export interface CardSizeSelector {
   size: Sizes;
   setSize: (size: Sizes) => void;
}
