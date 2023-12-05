import { BrowserRouter } from 'react-router-dom';
import styles from './app.module.css';
import Sidebar from './components/sidebar';
import Header from './components/header';


function App() {
   return (
      <BrowserRouter>
         <div className={styles.container}>
            <Header/>
            <Sidebar />
            <div className={styles.content}></div>
         </div>
      </BrowserRouter>
   );
}

export default App;
