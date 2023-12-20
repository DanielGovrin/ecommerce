import BagItem_module from './bag-item.module.css';
import { Item } from '../datatypes';
import { QuantitySelect } from '../quantity-select/quantity-select';
import { SizeSelector } from '../size-selector/size-selector';

export const BagItem = ({ mainTitle, secondaryTitle, image, price }: Item) => (
   <div className={BagItem_module.container}>
      <img src={image} alt="" />
      <div className={BagItem_module.test}>
         <h2>{mainTitle} 1</h2>
         <h3>{secondaryTitle}</h3>
         <p></p>
         <div className={BagItem_module.productSelectionContainer}>
            <QuantitySelect />
            <SizeSelector />
         </div>
      </div>
      <span className={BagItem_module.price}>{price}</span>
   </div>
);
