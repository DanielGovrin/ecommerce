import { createBoard } from '@wixc3/react-board';
import { CartProvider } from '../../../CartContext';
import { Shirts } from '../../../pages/shirts';

export default createBoard({
   name: 'Shirts',
   Board: () => (
      <CartProvider>
         <Shirts />
      </CartProvider>
   ),
   isSnippet: true,
   environmentProps: {
      windowWidth: 1322,
      canvasHeight: 2515,
   },
});
