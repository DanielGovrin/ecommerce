import { BrowserRouter } from 'react-router-dom';
import styles from './app.module.css';
import Sidebar from './components/sidebar';

function App() {
   return (
      <BrowserRouter>
         <div className={styles.container}>
            <Sidebar />
            <div className={styles.content}></div>
         </div>
      </BrowserRouter>
   );
}

export default App;
