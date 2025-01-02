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
import { ProductReviewContextProvider } from './context/ProductReviewContext.tsx';
// import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import Comments from './components/Comments.tsx';
import NestedComments from './components/NestedComments.tsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <>
          <CategoryCarousel />
          <CardContainer />
        </>,
      },
      {
        path: '/product/:id',
        element: <ProductPage />
      },
      {
        path: '/cart',
        element: <ProductCart />
      },
      {
        path: '/about',
        element: <h1>About</h1>
      },
      {
        path: '/comments',
        element: <Comments/>
      },
      {
        path: '/nested_comments',
        element: <NestedComments/>
      }
    ]
  },
]);
createRoot(document.getElementById('root')!).render(
  <CardContainerProvider>
    <ProductReviewContextProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </ProductReviewContextProvider>
  </CardContainerProvider>
);
