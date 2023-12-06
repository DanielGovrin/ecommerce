import styles from "./header.module.css"

function Header() {
    return (
        <div className={styles.headerContainer}>


            <div className={styles.categories}>

            </div>

            <div className={styles.searchAndCart}>
                <input type="search" className={styles.siteSearch} value="Search"/>
                <button className={styles.searchButton}>Search</button>
                <img src="./src/assets/cart.svg"  className={styles.cartLogo} />

            </div>
        </div>
    )
}

export default Header
