export interface CardItem {
   id: string;
   MainTitle: string;
   SecondaryTitle: string;
   Image: string;
   Price: string;
}

export interface SidebarItem {
   title: string;
   path: string;
   icon: JSX.Element;
}
