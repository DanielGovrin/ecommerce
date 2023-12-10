import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Hats from './pages/Hats';
import Pants from './pages/Pants';
import Shirts from './pages/Shirts';
import styles from './app.module.css';
import Sidebar from './components/sidebar';

function App() {
   return (
      <BrowserRouter>
         <div className={styles.container}>
            <Sidebar />
            <div className={styles.content}>
               <Routes>
                  <Route path="/Hats" element={<Hats />} />
                  <Route path="/Pants" element={<Pants />} />
                  <Route path="/Shirts" element={<Shirts />} />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
