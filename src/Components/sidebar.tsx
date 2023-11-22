import { Link } from 'react-router-dom'
import styles from './sidebar.module.css'
import { SidebarData } from './Data'
type Props = {}

export default function Sidebar({ }: Props) {
  return (
    <ul className={styles.navbar}>
      {SidebarData.map((item, index) => {
        return (
          <li key={index} className={styles.listItem}>
            <Link to={item.path} draggable={false}>
              <div className={styles.sidebarContent}>
                <div className={styles.icon}>{item.icon}</div>
                <span className={styles.text}>{item.title}</span>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}