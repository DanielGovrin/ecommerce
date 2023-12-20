import { createBoard } from '@wixc3/react-board';
import { Pants } from '../../../pages/pants';

export default createBoard({
   name: 'Pants',
   Board: () => (
      <Pants
         setCartCount={function (
            count: number | ((prevCartCount: number) => number)
         ): void {
            throw new Error('Function not implemented.');
         }}
      />
   ),
   isSnippet: true,
   environmentProps: {
      windowWidth: 1564,
      canvasHeight: 2363,
      windowHeight: 1036,
      canvasWidth: 1944,
   },
});
