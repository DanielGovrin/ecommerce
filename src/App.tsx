import { Route, Routes } from 'react-router-dom';
import { CartProvider } from './CartContext';
import styles from './app.module.css';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { Hats } from './pages/hats';
import { Home } from './pages/home';
import { Pants } from './pages/pants';
import { Shirts } from './pages/shirts';

export const App = () => {
   return (
      <CartProvider>
         <div className={styles.container}>
            <Header />
            <Sidebar />
            <div className={styles.content}>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="hats" element={<Hats />} />
                  <Route path="pants" element={<Pants />} />
                  <Route path="shirts" element={<Shirts />} />
               </Routes>
            </div>
         </div>
      </CartProvider>
   );
};
