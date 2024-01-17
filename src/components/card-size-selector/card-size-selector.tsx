import React from 'react';
import styles from './card-size-selector.module.css';
import { CardSizeSelector, Sizes } from '../datatypes';

const SizeSelector: React.FC<CardSizeSelector> = ({ size, setSize }) => {
   const sizes: Sizes[] = ['S', 'M', 'L', 'XL'];

   const handleSelectSize = (currentSize: Sizes) => {
      setSize(currentSize);
   };

   return (
      <form className={styles.sizeButtons} action="none">
         {sizes.map((currentSize) => (
            <button
               data-testid={`${currentSize}`}
               key={currentSize}
               type="button"
               className={`${styles.sizeButton} ${styles[currentSize!]}
                                ${size === currentSize
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
