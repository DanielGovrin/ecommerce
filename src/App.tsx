import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Hats from './pages/Hats';
import Home from './pages/Home';
import Pants from './pages/Pants';
import Shirts from './pages/Shirts';
import styles from './app.module.css';
import Sidebar from './components/sidebar';
import Header from './components/header';

function App() {
   return (
      <BrowserRouter>
         <div className={styles.container}>
            <Header />
            <Sidebar />
            <div className={styles.content}>
               <Routes>
                  <Route path="/" element={<Home />} />
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
