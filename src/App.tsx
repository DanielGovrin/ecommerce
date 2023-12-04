import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Hats from './Pages/Hats';
import Home from './Pages/Home';
import Pants from './Pages/Pants';
import Shirts from './Pages/Shirts';
import styles from './app.module.css';
import Header from './components/header';
import Sidebar from './components/sidebar';

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
                  <Route path="/Contact" element={<Contact />} />
               </Routes>
            </div>
         </div>
      </BrowserRouter>
   );
}

export default App;
