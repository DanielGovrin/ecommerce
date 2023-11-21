import { HatsData } from '../components/Data'
import Card from '../components/card';
import styles from "./pages.module.css"

function Hats() {
  return (
    <div className={styles.pageContainer}>
      {HatsData.map((item) => (
          <Card {...item} />
      ))}
    </div>
  );
}

export default Hats
