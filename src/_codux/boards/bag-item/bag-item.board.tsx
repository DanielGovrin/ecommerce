import { createBoard } from '@wixc3/react-board';
import { BagItem } from '../../../components/bag-item/bag-item';
import { PantsData } from '../../../components/data';

export default createBoard({
    name: 'BagItem',
    Board: () => (
        <BagItem
            id='pants1'
            mainTitle={PantsData[0].mainTitle}
            secondaryTitle={PantsData[0].secondaryTitle}
            image={PantsData[0].image}
            price={'$400'}
        />
    ),
    environmentProps: {
        canvasWidth: 517,
        canvasHeight: 144,
        windowWidth: 806
    },
});
