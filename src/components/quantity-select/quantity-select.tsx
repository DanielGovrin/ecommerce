import QuantitySelect_module from './quantity-select.module.css';

export const QuantitySelect = () => {
   const options = Array.from({ length: 10 }, (_, index) => index + 1);

   return (
      <div className={QuantitySelect_module.container}>
         <label className={QuantitySelect_module.text}>Quantity</label>
         <select className={QuantitySelect_module.selectBar}>
            {options.map((option) => (
               <option key={option}>{option}</option>
            ))}
         </select>
      </div>
   );
};
