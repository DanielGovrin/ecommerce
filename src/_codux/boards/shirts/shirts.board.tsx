import { createBoard } from '@wixc3/react-board';
import {Shirts} from '../../../pages/shirts';

export default createBoard({
   name: 'Shirts',
   Board: () => <Shirts setCartCount={function (count: number | ((prevCartCount: number) => number)): void {
      throw new Error('Function not implemented.');
   } } />,
   isSnippet: true,
   environmentProps: {
      windowWidth: 1322,
      canvasHeight: 2515,
   },
});
