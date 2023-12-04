import styles from './addtocart.module.css';

interface AddToCartProps {
  id: string;
}

function AddToCart({ id }: AddToCartProps) {

  const handleClick = () => {
    console.log('Add This Item To The Cart Via id');
  };

  return (
    <button className={styles.addtocart} onClick={handleClick}>
      Add To Cart
    </button>
  );
}

export default AddToCart;
