import { createBoard } from '@wixc3/react-board';
import CardSizeSelector from '../../../components/card-size-selector/card-size-selector';
import CardSizeSelector_module from '../../../components/card-size-selector/card-size-selector.module.css';

export default createBoard({
   name: 'CardSizeSelector',
   Board: () => (
      <div className={CardSizeSelector_module.container}>
         <CardSizeSelector
            size={null}
            setSize={function (): void {
               throw new Error('Function not implemented.');
            }}
         />
      </div>
   ),
   isSnippet: true,
   environmentProps: {
      canvasWidth: 329,
      canvasHeight: 400,
   },
});
