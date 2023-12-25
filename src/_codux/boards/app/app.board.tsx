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
        canvasHeight: 1095,
        canvasWidth: 2066,
        windowHeight: 1015,
        windowWidth: 1570
    }
});
