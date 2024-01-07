export type Sizes = 'S' | 'M' | 'L' | 'XL' | null;

export interface Item {
   id: string;
   mainTitle: string;
   secondaryTitle: string;
   image: string;
   price: string;
}

export interface CartItem extends Item {
   size: Sizes;
}

export interface SidebarItem {
   title: string;
   path: string;
   icon: JSX.Element;
}

export interface CardSizeSelector {
   size: Sizes;
   setSize: (size: Sizes) => void;
}
