import { createBoard } from '@wixc3/react-board';
import { BagItem } from '../../../components/bag-item/bag-item';
import { PantsData } from '../../../components/data';

export default createBoard({
   name: 'BagItem',
   Board: () => (
      <BagItem
         mainTitle={PantsData[0].mainTitle}
         secondaryTitle={PantsData[0].secondaryTitle}
         image={PantsData[0].image}
         price={'$400'}
         quantity={0}
      />
   ),
   environmentProps: {
      canvasWidth: 513,
      canvasHeight: 156,
   },
});
