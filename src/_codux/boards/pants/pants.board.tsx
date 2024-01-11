import { createBoard } from '@wixc3/react-board';
import { CartProvider } from '../../../CartContext';
import { Pants } from '../../../pages/pants';

export default createBoard({
   name: 'Pants',
   Board: () => (
      <CartProvider>
         <Pants />
      </CartProvider>
   ),
   isSnippet: true,
   environmentProps: {
      windowWidth: 1564,
      canvasHeight: 2363,
      windowHeight: 1036,
      canvasWidth: 1944,
   },
});
