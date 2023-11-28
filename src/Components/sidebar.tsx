import { Link } from 'react-router-dom';
import { sidebardata } from './data';
import styles from './sidebar.module.css';

export default function Sidebar() {
   return (
      <ul className={styles.navbar}>
         {sidebardata.map((item, index) => {
            return (
               <li key={index} className={styles.listItem}>
                  <Link
                     to={item.path}
                     draggable={false}
                     className={styles.sidebarContent}>
                     {item.icon}
                     {item.title}
                  </Link>
               </li>
            );
         })}
      </ul>
   );
}
