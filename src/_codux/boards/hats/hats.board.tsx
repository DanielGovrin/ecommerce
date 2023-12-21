import { createBoard } from '@wixc3/react-board';
import { CartProvider } from '../../../CartContext';
import { Hats } from '../../../pages/hats';

export default createBoard({
   name: 'Hats',
   Board: () => (
      <CartProvider>
         <Hats />
      </CartProvider>
   ),
   isSnippet: true,
   environmentProps: {
      canvasWidth: 2098,
      windowWidth: 1332,
      windowHeight: 947,
      canvasHeight: 1516,
   },
});
