import { ChangeEventHandler, useState } from "react";
import styles from "./header.module.css"

function Header() {


    const [searchWord, setSearchWord] = useState("Search");

    const handleChange:ChangeEventHandler = (event) => {
        setSearchWord(event.target.value)
    }


    return (
        <div className={styles.headerContainer}>


            <div className={styles.categories}>

            </div>

            <div className={styles.searchAndCart}>
                <input 
                type="search"
                className={styles.siteSearch}
                value={searchWord}
                placeholder="Search"
                onChange={handleChange}
                />
                <button className={styles.searchButton}>Search</button>
                <img src="./src/assets/cart.svg" className={styles.cartLogo} />

            </div>
        </div>
    )
}

export default Header
