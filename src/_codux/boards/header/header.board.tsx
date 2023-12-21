import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../components/header';
import { CartProvider } from '../../../CartContext';

export default createBoard({
   name: 'Header',
   Board: () =>
      <CartProvider>
         <Header />
      </CartProvider>
   ,
   isSnippet: true,
   environmentProps: {
      windowWidth: 1796,
      canvasWidth: 882,
      windowHeight: 842,
      canvasHeight: 5,
   },
});
