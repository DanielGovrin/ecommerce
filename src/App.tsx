import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { useCart } from './CartContext';
import styles from './app.module.css';
import { BagModal } from './components/bagModal/bagModal';
import { Header } from './components/header';
import { Sidebar } from './components/sidebar';
import { Hats } from './pages/hats';
import { Home } from './pages/home';
import { Pants } from './pages/pants';
import { Shirts } from './pages/shirts';
import { Blur } from './components/blur/blur';


export const App = () => {
   const { showModal } = useCart();

   return (
      <MemoryRouter>
         <div className={styles.container}>
            <BagModal />
            <Blur />
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
      </MemoryRouter>
   );
};
