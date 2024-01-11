import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import './app.module.css';
import './index.css';
import { CartProvider } from './CartContext.tsx';
ReactDOM.createRoot(document.getElementById('root')!).render(
   <CartProvider>
      <App />
   </CartProvider>
);
