import Sidebar from './components/sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hats from './Pages/Hats'
import Pants from './Pages/Pants'
import Shirts from './Pages/Shirts'
import styles from './app.module.css'

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
   )
}

export default App;
