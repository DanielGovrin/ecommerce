import { createBoard } from '@wixc3/react-board';
import { CartProvider } from '../../../CartContext';
import { BagModal } from '../../../components/bagModal/bagModal';

export default createBoard({
   name: 'Bag',
   Board: () => (
      <CartProvider>
         <BagModal />
      </CartProvider>
   ),
   isSnippet: true,
   environmentProps: {
      canvasWidth: 577,
      canvasHeight: 480,
      windowHeight: 705,
      windowWidth: 1244,
   },
});
