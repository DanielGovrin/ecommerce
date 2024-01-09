import { createBoard } from '@wixc3/react-board';
import { BagItem } from '../../../components/bag-item/bag-item';
import { PantsData } from '../../../components/data';
import { CartProvider } from '../../../CartContext';

export default createBoard({
   name: 'BagItem',
   Board: () => (
      <CartProvider>
         <BagItem
            id="pants1"
            mainTitle={PantsData[0].mainTitle}
            secondaryTitle={PantsData[0].secondaryTitle}
            image={PantsData[0].image}
            price={'400'}
            size={"S"}
         />
      </CartProvider>
   ),
   environmentProps: {
      canvasWidth: 517,
      canvasHeight: 158,
      windowWidth: 806,
      windowHeight: 640,
   },
});
