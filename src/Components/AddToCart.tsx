import styles from './addtocart.module.css';

interface AddToCartProps {
   id: string;
}

function AddToCart({ id }: AddToCartProps) {
   const button = document.getElementById(id);
   function carting() {
      console.log(button);
   }
   return (
      <div className={styles.addtocart} onClick={carting}>
         {' '}
         Add To Cart
      </div>
   );
}

export default AddToCart;
