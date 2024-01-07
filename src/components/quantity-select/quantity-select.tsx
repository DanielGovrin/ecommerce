import QuantitySelect_module from './quantity-select.module.css';

export const QuantitySelect: React.FC<{ quantity: number }> = ({
   quantity,
}) => {
   const options = Array.from({ length: 10 }, (_, index) => index + 1);

   return (
      <div className={QuantitySelect_module.container}>
         <label className={QuantitySelect_module.text}>Quantity</label>
         <select className={QuantitySelect_module.selectBar}>
            {options.map((option: number) => (
               <option
                  key={option}
                  selected={option === quantity ? true : false}
                  // onChange={}
               >
                  {option}
               </option>
            ))}
         </select>
      </div>
   );
};
