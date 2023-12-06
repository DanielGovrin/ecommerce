import { ChangeEventHandler, useState } from "react";
import styles from "./header.module.css"

function Header() {


    const [searchWord, setSearchWord] = useState({searchWord:''});

    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchWord({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className={styles.headerContainer}>


            <div className={styles.categories}>

            </div>

            <div className={styles.searchAndCart}>
                <input type="search" className={styles.siteSearch} value="Search" onChange={handleChange} />
                <button className={styles.searchButton}>Search</button>
                <img src="./src/assets/cart.svg" className={styles.cartLogo} />

            </div>
        </div>
    )
}

export default Header
