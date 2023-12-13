export interface CardItem {
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

export interface cartCount {
   cartCount: number;
}
