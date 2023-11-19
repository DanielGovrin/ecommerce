import React from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './Data'
import styles from './sidebar.module.css'

type Props = {}

export default function Sidebar({ }: Props) {
  return (
    <ul className={styles.navbar}>
      {SidebarData.map((item, index) => {
        return (
          <li key={index} className={styles.listItem}>
            <Link to={item.path}>
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