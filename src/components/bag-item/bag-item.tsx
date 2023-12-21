import BagItem_module from './bag-item.module.css';
import { Item } from '../datatypes';
import { SizeSelector } from '../size-selector/size-selector';

export const BagItem: React.FC<Item> = ({ id, mainTitle, secondaryTitle, image, price }) => (
    <div className={BagItem_module.container}>
        <img src={image} alt="" />
        <div className={BagItem_module.test}>
            <h2>{mainTitle} </h2>
            <h3>{secondaryTitle}</h3>
            <p></p>
            <div className={BagItem_module.productSelectionContainer}>
                <SizeSelector />
            </div>
            <button className={BagItem_module.deleteButton}></button>
            <div className={BagItem_module.deleteContainer} />
        </div>
        <span className={BagItem_module.price}>{price}</span>
    </div>
);
