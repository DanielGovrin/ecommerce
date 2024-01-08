import { createBoard } from '@wixc3/react-board';
import { Hats } from '../../../pages/hats';

export default createBoard({
   name: 'Hats',
   Board: () => <Hats setCartCount={function (count: number | ((prevCartCount: number) => number)): void {
      throw new Error('Function not implemented.');
   } } />,
   isSnippet: true,
   environmentProps: {
      canvasWidth: 2098,
      windowWidth: 1332,
      windowHeight: 947,
      canvasHeight: 1516,
   },
});
