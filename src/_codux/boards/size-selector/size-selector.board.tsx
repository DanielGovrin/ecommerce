import { createBoard } from '@wixc3/react-board';
import { SizeSelector } from '../../../components/size-selector/size-selector';

export default createBoard({
   name: 'SizeSelector',
   Board: () => <SizeSelector />,
   isSnippet: true,
});
