// SizeSelector.tsx

import React from 'react';
import styles from './card-size-selector.module.css';
import { CardSizeSelector } from '../datatypes';

const SizeSelector: React.FC<CardSizeSelector> = ({ size, setSize }) => {
   const sizes = ['S', 'M', 'L', 'XL'];

   const handleSelectSize = (currentSize: string) => {
      if (currentSize === size) {
         size = null;
      } else setSize(currentSize);
   };

   return (
      <form className={styles.sizeButtons} action="none">
         {sizes.map((currentSize) => (
            <button
               key={currentSize}
               type="button"
               className={`${styles.sizeButton} ${styles[currentSize]}
                                ${
                                   size === currentSize
                                      ? styles.selectedSize
                                      : ''
                                }`}
               onClick={() => handleSelectSize(currentSize)}>
               {currentSize}
            </button>
         ))}
      </form>
   );
};

export default SizeSelector;
