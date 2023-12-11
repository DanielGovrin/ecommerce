export interface CardItem {
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