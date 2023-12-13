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
         mainTitle={'Cool pants'}
      />
   ),
   isSnippet: true,
   environmentProps: {
      canvasWidth: 360,
      windowHeight: 540,
      windowWidth: 756,
   },
});
