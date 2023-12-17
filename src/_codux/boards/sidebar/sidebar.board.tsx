import { BrowserRouter } from 'react-router-dom';
import { createBoard } from '@wixc3/react-board';
import {Sidebar} from '../../../components/sidebar';

export default createBoard({
   name: 'Sidebar',
   Board: () => (
      <BrowserRouter>
         <Sidebar />
      </BrowserRouter>
   ),
   isSnippet: true,
});
