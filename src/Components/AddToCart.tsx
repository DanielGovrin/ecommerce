import styles from './addtocart.module.css';

interface AddToCartProps {
   id: string;
}

function AddToCart({ id }: AddToCartProps) {
   function carting() {
      console.log('Add This Item To The Cart via the id');
   }
   return (
      <div className={styles.addtocart} onClick={carting}>
         Add To Cart
      </div>
   );
}

export default AddToCart;
