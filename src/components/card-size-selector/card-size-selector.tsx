// SizeSelector.tsx

import React, { useState } from 'react';
import styles from "./card-size-selector.module.css"

const SizeSelector: React.FC = () => {
    const sizes = ['S', 'M', 'L', 'XL'];
    const [selectedSize, setSelectedSize] = useState<string | null>(null);

    const handleSelectSize = (size: string) => {
        setSelectedSize(size);
        // onSelectSize(size);
    };

    return (
        <form className={styles.sizeButtons} action="none">
            {sizes.map((size) => (
                <button
                    key={size}
                    type='button'
                    className={styles.sizeButton}
                    onClick={() => handleSelectSize(size)}
                >
                    {size}
                </button>
            ))}
        </form>
    );
};

export default SizeSelector;
