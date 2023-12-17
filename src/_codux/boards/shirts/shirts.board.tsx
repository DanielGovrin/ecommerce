import { createBoard } from '@wixc3/react-board';
import {Shirts} from '../../../pages/shirts';

export default createBoard({
   name: 'Shirts',
   Board: () => <Shirts />,
   isSnippet: true,
   environmentProps: {
      windowWidth: 1322,
      canvasHeight: 2515,
   },
});
