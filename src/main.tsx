import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CardContainer from './components/CardContainer';
import { CartProvider } from './context/CartContext';
import { CardContainerProvider } from './context/CardContainerContext';
import ProductCart from './components/ProductCart.tsx';
import CategoryCarousel from './components/CategoryCarousel.tsx';
import ProductPage from './components/ProductPage.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <>
          <CategoryCarousel/>
          <CardContainer />
        </>,
      },
      {
        path: '/product/:id',
        element: <ProductPage/>
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
]);
createRoot(document.getElementById('root')!).render(
  <CardContainerProvider>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </CardContainerProvider>
);
