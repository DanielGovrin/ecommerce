export interface Item {
   id: string;
   mainTitle: string;
   secondaryTitle: string;
   image: string;
   price: string;
}

export interface SidebarItem {
   title: string;
   path: string;
   icon: JSX.Element;
}

export interface CardSizeSelector {
   size: null | string;
   setSize: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface CartItem extends Item {
   size: string;
}
