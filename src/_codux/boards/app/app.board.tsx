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
        canvasHeight: 795,
        canvasWidth: 3030,
        windowHeight: 706,
        windowWidth: 1256,
    },
});
