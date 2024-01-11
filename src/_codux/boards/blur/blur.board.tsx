import { createBoard } from '@wixc3/react-board';
import { Blur } from '../../../components/blur/blur';

export default createBoard({
   name: 'Blur',
   Board: () => <Blur />,
   isSnippet: true,
});
