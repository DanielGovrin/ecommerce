import { createBoard } from '@wixc3/react-board';
import { App } from '../../../App';
import { MemoryRouter } from 'react-router-dom';
import { CartProvider } from '../../../CartContext';

export default createBoard({
   name: 'App',
   Board: () => (
      <CartProvider>
         <App />
      </CartProvider>
   ),
   environmentProps: {
      canvasHeight: 1055,
      canvasWidth: 1684,
      windowHeight: 896,
      windowWidth: 1534,
   },
});
