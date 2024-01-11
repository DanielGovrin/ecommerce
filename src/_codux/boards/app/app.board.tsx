import { createBoard } from '@wixc3/react-board';
import { App } from '../../../App';
import { CartProvider } from '../../../CartContext';

export default createBoard({
   name: 'App',
   Board: () => (
      <CartProvider>
         <App />
      </CartProvider>
   ),
   environmentProps: {
      canvasHeight: 1107,
      canvasWidth: 1684,
      windowHeight: 1047,
      windowWidth: 1480,
   },
});
