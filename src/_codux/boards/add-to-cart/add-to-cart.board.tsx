import { createBoard } from '@wixc3/react-board';
import AddToCart from '../../../components/AddToCart';

export default createBoard({
   name: 'AddToCart',
   Board: () => <AddToCart />,
   isSnippet: true,
   environmentProps: {
      canvasWidth: 789,
      windowWidth: 1090,
      canvasHeight: 82,
   },
});
