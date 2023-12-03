import { ShirtsData } from '../components/data'
import Card from '../components/card'
import styles from './contentpages.module.css'

function Shirts() {
   return (
      <div className={styles.pageContainer}>
         {ShirtsData.map((item) => (
            <Card {...item} key={item.id} />
         ))}
      </div>
   )
}

export default Shirts
