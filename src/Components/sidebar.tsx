import { Link } from 'react-router-dom';
import styles from './sidebar.module.css';
import { sidebardata } from './data';

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
                     <div className={styles.icon}>{item.icon}</div>
                     <span className={styles.text}>{item.title}</span>
                  </Link>
               </li>
            );
         })}
      </ul>
   );
}
