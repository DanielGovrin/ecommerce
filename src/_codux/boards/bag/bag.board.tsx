import { createBoard } from '@wixc3/react-board';
import { Bag } from '../../../components/bag/bag';

export default createBoard({
   name: 'Bag',
   Board: () => <Bag />,
   isSnippet: true,
});
