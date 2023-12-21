import SizeSelector_module from './size-selector.module.css';


export const SizeSelector = () => {
   const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

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
