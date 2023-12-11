import { createBoard } from '@wixc3/react-board';
import Header from '../../../components/header';

export default createBoard({
    name: 'Header',
    Board: () => <Header />,
    isSnippet: true,
});
