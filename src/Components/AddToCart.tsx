import { useState } from "react";
import styles from "./addtocart.module.css"

interface AddToCartProps {
  id: string;
}


function AddToCart({ id }: AddToCartProps) {

  const [buttonText, setButtonText] = useState('Add To Cart');

  const carting = () => {
    setButtonText((prevButtonText) =>
      prevButtonText === 'Add To Cart' ? 'Clicked' : 'Add To Cart'
    );
  };


  return (
    <div className={styles.addtocart} onClick={carting}> {buttonText}</div>
  )
}

export default AddToCart