import BagItem_module from './bag-item.module.css';
import { Item } from '../datatypes';
import { SizeSelector } from '../size-selector/size-selector';
import { useCart } from '../../CartContext';

export const BagItem: React.FC<Item> = ({
    id,
    mainTitle,
    secondaryTitle,
    image,
    price,
}) => {
    const { removeFromCart } = useCart();

    const handleClick = () => {
        removeFromCart(id);
    };

    return (
        <div className={BagItem_module.container}>
            <img src={image} alt="" height="150px" width="150px" />
            <div className={BagItem_module.test}>
                <h2>{mainTitle} </h2>
                <h3>{secondaryTitle}</h3>
                <p></p>
                <div className={BagItem_module.productSelectionContainer}>
                    <SizeSelector />
                </div>
                <button
                    className={BagItem_module.deleteButton}
                    onClick={handleClick}></button>
                <div className={BagItem_module.deleteContainer} />
            </div>
            <span className={BagItem_module.price}>{price}</span>
        </div>
    );
};
