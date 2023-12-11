import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Hats from './pages/hats';
import Home from './pages/home';
import Pants from './pages/pants';
import Shirts from './pages/shirts';

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
