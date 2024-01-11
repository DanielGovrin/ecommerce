import { createBoard } from '@wixc3/react-board';
import { BagSizeSelector } from '../../../components/bag-size-selector/size-selector';

export default createBoard({
   name: 'BagSizeSelector',

   Board: () => <BagSizeSelector size={'XL'} />,
   isSnippet: true,
   environmentProps: {
      canvasWidth: 104,
   },
});
