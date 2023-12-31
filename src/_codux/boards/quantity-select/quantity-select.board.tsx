import { createBoard } from '@wixc3/react-board';
import { QuantitySelect } from '../../../components/quantity-select/quantity-select';

export default createBoard({
   name: 'QuantitySelect',
   Board: () => <QuantitySelect />,
   isSnippet: true,
   environmentProps: {
      canvasWidth: 125,
      canvasHeight: 32,
   },
});
