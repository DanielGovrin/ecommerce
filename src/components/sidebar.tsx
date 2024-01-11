import { Link } from 'react-router-dom';
import { SidebarData } from './data';
import styles from './sidebar.module.css';
import { SidebarItem } from './datatypes';

export const Sidebar = () => {
   return (
      <ul className={styles.navbar}>
         {SidebarData.map((item: SidebarItem, index: number) => (
            <li key={index} className={styles.listItem}>
               <Link
                  to={item.path}
                  draggable={false}
                  className={styles.sidebarContent}>
                  {item.title}
               </Link>
            </li>
         ))}
      </ul>
   );
};
