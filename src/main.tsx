import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CardContainer from './components/CardContainer';
import { CartProvider } from './context/CartContext';
import ProductCart from './components/ProductCart.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <CardContainer />,
      },
      {
        path: '/cart',
        element: <ProductCart />
      },
      {
        path: '/about',
        element: <h1>About</h1>
      }
    ]
  },
  
  // Add more routes as needed
]);
createRoot(document.getElementById('root')!).render(
<CartProvider>
  <RouterProvider router={router}/>
</CartProvider>
);
