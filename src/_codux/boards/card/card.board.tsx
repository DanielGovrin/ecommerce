import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card';
import { PantsData } from '../../../components/data';

export default createBoard({
   name: 'Card',
   Board: () => (
      <Card
         secondaryTitle={''}
         image={PantsData[0].image}
         price={'bazillion $'}
         mainTitle={'Cool pants'} setCartCount={function (count: number | ((prevCartCount: number) => number)): void {
            throw new Error('Function not implemented.');
         } }      />
   ),
   isSnippet: true,
   environmentProps: {
      canvasWidth: 360,
      windowHeight: 540,
      windowWidth: 756,
   },
});
