import { createBoard } from '@wixc3/react-board';
import { Header } from '../../../components/header';

export default createBoard({
   name: 'Header',
   Board: () => <Header cartCount={0} />,
   isSnippet: true,
   environmentProps: {
      windowWidth: 1796,
      canvasWidth: 882,
      windowHeight: 842,
      canvasHeight: 5,
   },
});
