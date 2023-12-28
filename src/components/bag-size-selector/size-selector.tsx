import SizeSelector_module from './bag-size-selector.module.css';

export const BagSizeSelector = () => {
   const sizeOptions = ['S', 'M', 'L', 'XL'];

   return (
      <div className={SizeSelector_module.container}>
         <label className={SizeSelector_module.text}>Size </label>
         <select className={SizeSelector_module.selectBar}>
            {sizeOptions.map((option) => (
               <option key={option}>{option}</option>
            ))}
         </select>
      </div>
   );
};
