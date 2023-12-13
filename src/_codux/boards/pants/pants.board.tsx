import { createBoard } from '@wixc3/react-board';
import Pants from '../../../pages/pants';

export default createBoard({
   name: 'Pants',
   Board: () => <Pants />,
   isSnippet: true,
   environmentProps: {
      windowWidth: 1358,
      canvasHeight: 2363,
      windowHeight: 840,
   },
});
