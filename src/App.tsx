import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Hats from './pages/Hats';
import Home from './pages/Home';
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
                  <Route path="/" element={<Home />} />
                  <Route path="/Hats" element={<Hats />} />
                  <Route path="/Pants" element={<Pants />} />
                  <Route path="/Shirts" element={<Shirts />} />
                  <Route path="/Contact" element={<Contact />} />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
