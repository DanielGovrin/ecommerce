import { AddToCart } from './AddToCart';
import styles from './card.module.css';
import { Item, Sizes } from './datatypes';
import CardSizeSelector from './card-size-selector/card-size-selector';
import { useState } from 'react';

export const Card: React.FC<Item> = ({
   id,
   mainTitle,
   secondaryTitle,
   image,
   price,
}) => {
   const [size, setSize] = useState<Sizes>(null);
   const [addToCartClicked, setAddToCartClicked] = useState<boolean>(false);

   return (
      <div className={styles.cardContainer} data-testid = {`${id} card`}>
         <img
            className={styles.img}
            src={image}
            alt={mainTitle}
            draggable={false}
         />
         <div className={styles.listingContainer}>
            <h3 className={styles.mainTitle}>{mainTitle}</h3>
            <h4 className={styles.secondaryTitle}>{secondaryTitle}</h4>
            <h3 className={styles.price}>{`$ ${price}`}</h3>
         </div>
         {/* The following div is just so that the error message will be aligned left just as the sizeselector */}
         <div>
            {addToCartClicked && !size && (
               <p className={styles.errorMessage}>Please choose a size</p>
            )}
            <CardSizeSelector size={size} setSize={setSize} data-testid={`${id} size selector`} />
         </div>
         <AddToCart
            data-testid={`${id} add to cart button`}
            id={id}
            mainTitle={mainTitle}
            secondaryTitle={secondaryTitle}
            image={image}
            size={size}
            price={price}
            setAddToCartClicked={setAddToCartClicked}
         />
      </div>
   );
};
