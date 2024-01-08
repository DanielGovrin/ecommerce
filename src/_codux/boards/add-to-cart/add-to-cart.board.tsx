import { createBoard } from '@wixc3/react-board';
import { AddToCart } from '../../../components/AddToCart';

export default createBoard({
    name: 'AddToCart',
    Board: () => <AddToCart setCartCount={function(count: number | ((prevCartCount: number) => number)): void {
        throw new Error('Function not implemented.');
    }} />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 757,
        windowWidth: 1090,
        canvasHeight: 82,
    },
});
