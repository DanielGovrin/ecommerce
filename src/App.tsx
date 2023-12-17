import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './app.module.css';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { Hats } from './pages/hats';
import { Home } from './pages/home';
import { Pants } from './pages/pants';
import { Shirts } from './pages/shirts';

export const App = () => {
   const [cartCount, setCartCount] = useState(0);
   return (
         <div className={styles.container}>
            <Header cartCount={cartCount} />
            <Sidebar />
            <div className={styles.content}>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route
                     path="hats"
                     element={<Hats setCartCount={setCartCount} />}
                  />
                  <Route
                     path="pants"
                     element={<Pants setCartCount={setCartCount} />}
                  />
                  <Route
                     path="shirts"
                     element={<Shirts setCartCount={setCartCount} />}
                  />
               </Routes>
            </div>
         </div>
   );
};
