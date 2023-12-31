import { createBoard } from '@wixc3/react-board';
import { AddToCart } from '../../../components/AddToCart';
import { CartProvider } from '../../../CartContext';
import { PantsData } from '../../../components/data';

export default createBoard({
   name: 'AddToCart',
   Board: () => (
      <CartProvider>
         <AddToCart
            id={'pants1'}
            mainTitle={PantsData[0].mainTitle}
            secondaryTitle={PantsData[0].secondaryTitle}
            image={PantsData[0].image}
            price={'400'}
         />
      </CartProvider>
   ),
   isSnippet: true,
   environmentProps: {
      canvasWidth: 757,
      windowWidth: 1090,
      canvasHeight: 82,
   },
});
