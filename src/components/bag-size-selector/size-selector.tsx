import { Sizes } from '../datatypes';
import SizeSelector_module from './bag-size-selector.module.css';

export const BagSizeSelector: React.FC<{ size: Sizes }> = ({size}) => {
   const sizeOptions: Sizes[] = ['S', 'M', 'L', 'XL'];

   return (
      <div className={SizeSelector_module.container}>
         <label className={SizeSelector_module.text}>Size </label>
         <select className={SizeSelector_module.selectBar}>
            {sizeOptions.map((option:Sizes) => (
               <option key={option} selected={
                  option === size ? true : false
               }>{option}</option>
            ))}
         </select>
      </div>
   );
};
