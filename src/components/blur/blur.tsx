import React from 'react';
import styles from './blur.module.css';
import { useCart } from '../../utility';

export const Blur: React.FC = () => {
   const { showModal } = useCart();

   return showModal && <div className={styles.container}></div>;
};
