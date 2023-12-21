import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card';
import { PantsData } from '../../../components/data';
import { CartProvider } from '../../../CartContext';

export default createBoard({
    name: 'Card',
    Board: () => (
        <CartProvider>
            <Card
                id={'pants1'}
                mainTitle={PantsData[0].mainTitle}
                secondaryTitle={PantsData[0].secondaryTitle}
                image={PantsData[0].image}
                price={'$400'}

            />
        </CartProvider>
    ),
    isSnippet: true,
    environmentProps: {
        canvasWidth: 354,
        windowHeight: 584,
        windowWidth: 756,
    },
});
