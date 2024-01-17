import { ChangeEvent } from 'react';
import { useCart } from '../../utility';
import { QuantitySelector } from '../datatypes';
import QuantitySelect_module from './quantity-select.module.css';

export const QuantitySelect: React.FC<QuantitySelector> = ({
   quantity,
   size,
   id,
   mainTitle,
   secondaryTitle,
   image,
   price,
}) => {
   const options = Array.from({ length: 10 }, (_, index) => index + 1);
   const { ChangeNumOfItems } = useCart();
   const item = { id, mainTitle, secondaryTitle, image, price };
   const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
      ChangeNumOfItems(item, size, parseFloat(event.target.value));
   };

   return (
      <div className={QuantitySelect_module.container}>
         <label className={QuantitySelect_module.text}>Quantity</label>
         <select className={QuantitySelect_module.selectBar} onChange={handleChange}>
            {options.map((option: number) => (
               <option key={option} selected={option === quantity ? true : false}>
                  {option}
               </option>
            ))}
         </select>
      </div>
   );
};
