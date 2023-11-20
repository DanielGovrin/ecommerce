import React from 'react'
import { PantsData } from '../components/Data';
import Card from '../components/Card';
import styles from "./pages.module.css"



function Pants() {
  return (
    <ul>
      {PantsData.map((item, index) => (
        <li key={index}>
          <div className={styles.container}>
            <Card {...item} />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Pants
