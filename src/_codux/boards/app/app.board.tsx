import { createBoard } from '@wixc3/react-board';
import { App } from '../../../App';
import { MemoryRouter } from 'react-router-dom';


export default createBoard({
    name: 'App',
    Board: () =>
        <MemoryRouter>
            <App />
        </MemoryRouter>,
    environmentProps: {
        windowHeight: 897,
        windowWidth: 1958,
        canvasWidth: 1736,
        canvasHeight: 1032
    }
});
