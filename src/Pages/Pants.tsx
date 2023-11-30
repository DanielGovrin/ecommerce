import { PantsData } from '../components/data'
import Card from '../components/card'
import styles from './contentpages.module.css'

function Pants() {
   return (
      <div className={styles.pageContainer}>
         {PantsData.map((item) => (
            <Card {...item} />
         ))}
      </div>
   )
}

export default Pants
