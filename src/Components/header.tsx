import styles from "./header.module.css"

function Header() {
    return (
        <div className={styles.headerContainer}>

            <svg width="70%" height="70%" className={styles.logo}>
                {/* Include the contents of your SVG file here */}
                <image href="./public/vite.svg" width="100%" height="100%" />
            </svg>

            <div className={styles.categories}>

            </div>

            <div className={styles.rightside}>

            </div>
        </div>
    )
}

export default Header
