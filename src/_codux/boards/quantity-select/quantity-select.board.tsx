import { createBoard } from '@wixc3/react-board';
import { QuantitySelect } from '../../../components/quantity-select/quantity-select';

export default createBoard({
   name: 'QuantitySelect',
   Board: () => <QuantitySelect size={null} quantity={0} id={''} mainTitle={''} secondaryTitle={''} image={''} price={''} />,
   isSnippet: true,
   environmentProps: {
      canvasWidth: 125,
      canvasHeight: 32,
   },
});
