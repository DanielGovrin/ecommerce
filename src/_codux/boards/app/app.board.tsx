import { createBoard } from '@wixc3/react-board';
import { App } from '../../../App';
import { MemoryRouter } from 'react-router-dom';

export default createBoard({
   name: 'App',
   Board: () => (
      <MemoryRouter>
         <App />,
      </MemoryRouter>
   ),
   environmentProps: {
      canvasWidth: 2032,
      canvasHeight: 3086,
      windowWidth: 2016,
      windowHeight: 1064,
   },
});
