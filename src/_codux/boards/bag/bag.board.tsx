import { createBoard } from '@wixc3/react-board';
import { CartProvider } from '../../../CartContext';
import { Bag } from '../../../components/bag/bag';


export default createBoard({
    name: 'Bag',
    Board: () => (
        <CartProvider>
            <Bag />
        </CartProvider>
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 577,
        canvasHeight: 480,
        windowHeight: 705,
        windowWidth: 1244
    }
});
