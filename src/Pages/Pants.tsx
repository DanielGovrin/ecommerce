import { PantsData } from '../components/Data';
import Card from '../components/card';
import styles from "./pages.module.css"



function Pants() {
  return (
    <div className={styles.pageContainer}>
      {PantsData.map((item) => (
        <Card {...item} />
      ))}
    </div>
  );
}

export default Pants
